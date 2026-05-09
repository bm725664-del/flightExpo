import ContactMap from "./ContactMap";

const contactInfo = [
  {
    icon: "location_on",
    title: "Office Address",
    value: (
      <>
        1200 Avenue of the Americas, Suite 400
        <br />
        New York, NY 10036
      </>
    ),
    iconBg: "bg-primary-container",
    iconText: "text-on-primary-container",
    titleColor: "text-primary",
  },
  {
    icon: "phone_in_talk",
    title: "24/7 Concierge Hotline",
    value: "+1 (800) LUXE-VIP",
    iconBg: "bg-tertiary-container",
    iconText: "text-on-tertiary-container",
    titleColor: "text-tertiary",
  },
  {
    icon: "mail",
    title: "Email",
    value: "concierge@luxetravel.global",
    iconBg: "bg-secondary-container",
    iconText: "text-on-secondary-container",
    titleColor: "text-secondary",
  },
];

const ContactSidebar = () => {
  return (
    <>
      <aside className="lg:col-span-5 flex flex-col gap-stack-lg">
        {/* Contact Info Card */}
        <div className="bg-surface-container-high p-stack-lg rounded-3xl border border-outline-variant/10">
          <h3 className="font-h3 text-h3 mb-stack-md">Global Headquarters</h3>
          <div className="space-y-stack-md">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-stack-md">
                {/* Icon */}
                <div
                  className={`${item.iconBg} ${item.iconText} p-stack-sm rounded-xl`}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>

                {/* Text */}
                <div>
                  <p
                    className={`font-label-md text-label-md ${item.titleColor}`}
                  >
                    {item.title}
                  </p>

                  <p className="font-body-md text-body-md">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ContactMap />
      </aside>
    </>
  );
};

export default ContactSidebar;
