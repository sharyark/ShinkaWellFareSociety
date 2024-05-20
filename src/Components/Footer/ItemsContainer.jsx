import Item from "./Item";
import {   ABOUT, CONTACT, SERVICES } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="max-w-90 mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={ABOUT} title="ABOUT" />
      <Item Links={SERVICES} title="SERVICES" />
      <Item Links={CONTACT} title="CONTACT-US" />
      {/* <Item Links={SUPPORT} title="SUPPORT" /> */}
    </div>
  );
};

export default ItemsContainer;
