import AppRouter, { SubDomainRouter } from "../AppRouter";

export const subDomainList = [
    { subDomain: "www", app: AppRouter, main: true }, // this is our main app so returns AppRouter component
    { subDomain: "url", app: SubDomainRouter, main: false } // this is our subdomain app so returns SubDomainRouter component
];