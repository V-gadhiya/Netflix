import ContactCard from "@/app/components/ContactCard";
import ContactForm from "@/app/components/ContactForm";
import styles from "@/app/contact/contact.module.css"
const Page = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard/>

                <section className={styles.contact_section}>
                    <h2>We love to hear <span> from you </span></h2>

                    <ContactForm/>
                </section>
            </div>


            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27355133.318475615!2d16.829909554968694!3d33.18132006772724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e916122cbf%3A0x65ed9e9076098dbe!2sNetflix%20Mumbai%20Office!5e0!3m2!1sen!2sin!4v1706768612238!5m2!1sen!2sin"
                width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy"
                className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>


        </>
    );
};

export default Page;