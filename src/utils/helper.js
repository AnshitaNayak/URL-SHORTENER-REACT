import { subDomainList } from "./constant";

export const getApps = () => {
    // this line returns the hostname
    const subdomain = getSubDomain(window.location.hostname);

    const mainApp = subDomainList.find((app) => app.main);
    if (subdomain === "") {
        return mainApp.app;
    }

    const apps = subDomainList.find((app) => subdomain === app.subDomain);

    return apps ? apps.app : mainApp.app;
};

// http://url.localhost:5173/ -> this is the local server, for this hostname = url.localhost
// http://url.urlbestshort.com/ -> this is the live server, for this hostname = url.urlbestshort.com
// On localhost, subdomain is before .localhost => "url" in above example
// On live domain, subdomain is before .domain.com => "url" in above example
// below is the code to get the subdomain
export const getSubDomain = (location) => {
    const locationParts = location.split(".");
    const isLocalhost = locationParts.slice(-1)[0] === "localhost"; //checks for last element
    const sliceTill = isLocalhost ? -1 : -2; //if -1 then take everything except last element and if -2 then take everything except last 2 elements
    return locationParts.slice(0, sliceTill).join("");
};