// This file exports interfaces for types used in the frontend, such as props for components.

export interface ProxyFormProps {
    onSubmit: (url: string) => void;
}

export interface HomeProps {
    title: string;
    description: string;
}