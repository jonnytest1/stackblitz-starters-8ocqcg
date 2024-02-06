import { FC, useState } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  /**
   * @type {ReturnType<typeof useState<string>>}
   *
   *
   *
   *
   */
  const [st, setSt] = useState();
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};
