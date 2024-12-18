import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  // const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
  const postUrl = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";
  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}