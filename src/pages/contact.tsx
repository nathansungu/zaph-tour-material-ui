
import HandleNavbar from "../components/home.components/navbar";
import {HandleContactDetails, HandleHeader, HandleContactForm, HandleMapEmbed, HandleFooter,
} from "../components/contacts.components/handleContact"

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
