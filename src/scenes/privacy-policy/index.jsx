import PrivacyPolicyImg from '../../assets/images/products/products-lisiting2.webp';
import './index.scss';
import BreadcrumbBanner from '../../components/global/breadcrumb-banner/BreadcrumbBanner';

const PrivacyPolicy = () => {
    return (
        <>
            <BreadcrumbBanner
                metaTitle="Privacy Policy"
                metaLink="/privacy-policy"
                imageSource={PrivacyPolicyImg}
                imageAlt="Privacy Policy"
                bannerHeading="Privacy Policy"
                homeTitle="Home"
                homeLink="/"
                pageLink="/privacy-policy"
            />

            <section className="privacy-main-content my-5">

                <div className='container-xxl'>

                    <div className='row'>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <ul className="privacy-points">
                                <li className="pri-points">
                                    <i className="bi bi-star"></i>
                                    The Pnf Papers is the domain name and provides the digital healthcare stage
                                    with owned mobile application, operated by Pnf Papers Private Limited, an
                                    establishment in Pakistan under the strictly obliged Companies Ordinance
                                    1984 (hereinafter, denoted to as “Pnf Papers” or “Our” or “We” or “Company”
                                    or “Us” ). The mobile application and domain name are moderately stated as
                                    the “Website”
                                </li>
                                <li className="pri-points">
                                    <i className="bi bi-star"></i>
                                    The platform that Website will facilitate is the purchase of all the
                                    pharmaceutical products that are offered by various pharmacies on sale.
                                    The Pnf Papers will make arrangement between the sellers and will govern
                                    with all our terms of usage. These services will be available to authentic
                                    buyers and who agreed upon after obtaining the due registration are
                                    legislatively bound to pay the ordered amount to the delivery person. In
                                    accordance with this procedure as determined by Pnf Papers will time to
                                    time (mentioned to as “User” or “You” or “Your” or “Yourself”) include
                                    authentic person access to the Website as the purely visitors. The Users
                                    will be offered various discount coupons and vouchers from the Services,
                                    which can be redeemed from various goods and services.
                                </li>
                                <li className="pri-points">
                                    <i className="bi bi-star"></i>
                                    The Privacy Policy is being assembled to provide the reason of providing
                                    Services and many other purposes can be identified too. Website will
                                    looked-for to gather and multitude certain data and information of the
                                    Users in their data software. Pnf Papers is committed to the protection of
                                    every product that is being served to their Users and takes all reasonable
                                    precautions to maintain the confidentiality of Users personal information.

                                </li>
                            </ul>

                            <h2> Why Personal Info Of User Is Needed? </h2>

                            <ul className="privacy-points">
                                <li className="pri-points">
                                    <i className="bi bi-star"></i>
                                    The personal information of User is needed to configure the authenticity of
                                    that User. That individual user will not be directly, indirectly or either
                                    by any means be contacted by third party. With the help personal information
                                    Super Med can identify the individuals concerned accordingly.{" "}
                                </li>
                                <li className="pri-points">
                                    <i className="bi bi-star"></i>
                                    The sensitivity of personal information makes you relate with information
                                    like bank account, card details, which include debit and credit, payment
                                    methods, medical records, history, biometric info, physiological, physical
                                    and mental health condition. Information related to User is presented only
                                    with us and will not be present on any of the public domain. User’s privacy
                                    will be furnished by law and their personal information will be safely
                                    secured.
                                </li>
                            </ul>


                        </div>


                    </div>

                </div>

            </section>


        </>
    )
}

export default PrivacyPolicy;