import { Request, Response } from 'express';
import axios from 'axios';
import cheerio from 'cheerio';

class ProxyController {
    async fetchPage(req: Request, res: Response) {
        const { url } = req.query;

        if (!url || typeof url !== 'string') {
            return res.status(400).json({ error: 'Invalid URL' });
        }

        try {
            const response = await axios.get(url);
            const html = response.data;

            const modifiedHtml = this.modifyLinks(html, url);
            res.send(modifiedHtml);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch the page' });
        }
    }

    private modifyLinks(html: string, baseUrl: string): string {
        const $ = cheerio.load(html);
        $('a').each((_, element) => {
            const href = $(element).attr('href');
            if (href) {
                const absoluteUrl = new URL(href, baseUrl).href;
                $(element).attr('href', absoluteUrl);
            }
        });
        return $.html();
    }
}

export default new ProxyController();