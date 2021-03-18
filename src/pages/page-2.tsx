import Head from 'next/head';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

import { EuiSpacer, EuiCodeBlock, EuiTitle } from '@elastic/eui';

const SecondPage: FunctionComponent = () => (
  <>
    <Head>
      <title>Secondary page title</title>
    </Head>

    <EuiTitle size="l">
      <h1>Second Page title</h1>
    </EuiTitle>

    <EuiCodeBlock language="html">{`<!--I'm an example of HTML-->
<div>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</div>`}</EuiCodeBlock>

    <EuiSpacer />

    <EuiCodeBlock
      language="js"
      fontSize="m"
      paddingSize="m"
      overflowHeight={300}
      isCopyable>
      {`import React from 'react';

export default () => (
  <div className="MyComponent">
    <h1>Hello world!</h1>
  </div>
);`}
    </EuiCodeBlock>

    <EuiSpacer />

    <EuiCodeBlock
      language="sql"
      fontSize="m"
      paddingSize="m"
      overflowHeight={300}
      isCopyable>
      {`CREATE TABLE "topic" (
    "id" serial NOT NULL PRIMARY KEY,
    "forum_id" integer NOT NULL,
    "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic"
ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
REFERENCES "forum" ("id");

-- Initials
insert into "topic" ("forum_id", "subject")
values (2, 'D''artagnian');`}
    </EuiCodeBlock>

    <EuiSpacer />

    <EuiCodeBlock>
      {`<-- Unstyled -->
TODO
<-- -->`}
    </EuiCodeBlock>

    <EuiSpacer />

    <Link href="/">
      <a>Go to Home</a>
    </Link>

    <EuiSpacer />

    <Link href="/my-app/stack-monitoring">
      <a>Go to Stack Monitoring</a>
    </Link>
  </>
);

export default SecondPage;
