export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    href: string;
}

export interface NavLink {
    label: string;
    href: string;
}
