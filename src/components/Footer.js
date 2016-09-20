import React from 'react';
//get the state of the todoLinks
import FilterLink from './FilterLink';

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL"> /* see mapDispatchToProps in FilterLink */
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE"> /* see mapDispatchToProps in FilterLink */
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED"> /* see mapDispatchToProps in FilterLink */
      Completed
    </FilterLink>
  </p>
);

export default Footer;
