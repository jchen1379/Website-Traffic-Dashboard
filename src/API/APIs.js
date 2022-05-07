const baseURL = process.env.REACT_APP_WEBSITE_TRAFFIC_MONITOR_API;

if(!baseURL){
  console.log("API URL is not found in ENV, please set REACT_APP_WEBSITE_TRAFFIC_MONITOR_API=$ApiUrl.");
}

export const domainsVisitsDataByDays = (days) => {
  return `${baseURL}/get_traffic_data/visits/days/${days}`;
}

export const domainVisitsDataByDays = (domain, days) => {
  return `${baseURL}/get_traffic_data/visits/domain/${domain}/days/${days}`;
}

export const domainVisitsDataByRange = (domain, start, end) => {
  return `${baseURL}/get_traffic_data/visits/domain/${domain}/range/${start}/${end}`;
}

export const domainTotalClients = (domain) => {
  return `${baseURL}/get_client_data/number_of_clients/domain/${domain}`;
}

export const domainProjectVisitsByRange = (domain, start, end) => {
  return `${baseURL}/get_traffic_data/analytics/domain/${domain}/range/${start}/${end}`;
}

export const domainProjectVisitsAll = (domain) => {
  return `${baseURL}/get_traffic_data/analytics/domain/${domain}/all`;
}