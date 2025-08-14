import DefaultPopup from "@/components/popup/defaultPopup";

export default function SuccessPopup() {
  return (
    <DefaultPopup
      type="Success"
      param="success"
      title="Your content has successfully been updated!"
      primaryColor="green-400"
    />
  );
}
