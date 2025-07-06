
import HandleNavbar from "../components/home.components/navbar";
import {HandleContactDetails, HandleContactForm, HandleMapEmbed
} from "../components/contacts.components/handleContact"
import HandleTitle from "../components/contacts.components/handleTitle";
import HandleFooter from "../components/footer";
import HandleHeader from "../components/home.components/header";
const Contacts = () => {
  return (
    <>
      <HandleHeader/>
      <HandleNavbar />
      <HandleTitle />
      <HandleContactForm />
      <HandleContactDetails />
      <HandleMapEmbed />
      <HandleFooter/>
    </>
  );
};

export default Contacts;
