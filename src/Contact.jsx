import React from "react";

const Contact = () => {
    return (
        <>
            <section className="sec" id="header">
                    <div className="h-text"><h1 className="h1-text">Contact Us</h1></div>
                    <div class="container">
                        <form action="action_page.php">
                            <div class="row">
                                <div class="col-25">
                                    <label for="fname">Name</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="email">Email-ID</label>
                                </div>
                                <div class="col-75">
                                    <input type="email" id="emal" name="email" placeholder="Your Email-ID.." />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="subject">Message</label>
                                </div>
                                <div class="col-75">
                                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
            </section>
        </>
    );
};

export default Contact;