import ContactCard from "@/app/components/ContactCard";
import ContactForm from "@/app/components/ContactForm";
import styles from "@/app/contect/contact.module.css"
const Page = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard/>

                <section className={styles.contact_section}>
                    <h2>We` love to hear <span> from you </span></h2>

                    <ContactForm/>
                </section>
            </div>


            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49529645.289101146!2d-152.03979492187497!3d40.73893324113603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bc3cc00bdb%3A0x1f2bf2054779e5da!2sNetflix!5e0!3m2!1sen!2sin!4v1706768749112!5m2!1sen!2sin"
                width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy"
                className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>


        </>
    );
};

export default Page;