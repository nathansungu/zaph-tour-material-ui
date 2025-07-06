
import HandleNavbar from "../components/home.components/navbar";
import {HandleContactDetails, HandleHeader, HandleContactForm, HandleMapEmbed
} from "../components/contacts.components/handleContact"

import HandleFooter from "../components/footer";
const Contacts = () => {
  return (
    <>
      <HandleNavbar />
      <HandleHeader />
      <HandleContactForm />
      <HandleContactDetails />
      <HandleMapEmbed />
      <HandleFooter/>
    </>
  );
};

export default Contacts;
