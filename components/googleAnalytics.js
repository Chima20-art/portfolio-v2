import Script from "next/script";

const GoogleAnalytics = ({ ga_id }) => (
  <>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js? 
      id=G-R7JKCQTMRS`}
    ></Script>
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-R7JKCQTMRS');
        `,
      }}
    ></Script>
  </>
);
export default GoogleAnalytics;
