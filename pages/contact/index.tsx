import React from "react";

import ContentWrap from "../../components/templates/ContentWrap";

interface Props {}

const Contact = (props: Props) => {
  return (
    <ContentWrap>
      <div className="p-3 flex flex-col w-full items-center">
        <div className={`max-w-prose whitespace-pre-line`}>
          {`Contact us page!
      Email: kajarrod@gmail.com
      There's not many ways to contact us right now as the site is still being built :P`}
        </div>
      </div>
    </ContentWrap>
  );
};

export default Contact;
