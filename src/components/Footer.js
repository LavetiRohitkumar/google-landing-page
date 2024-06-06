import React from 'react';
import { FaFacebookSquare, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GoArrowUpRight } from "react-icons/go";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";


const Footer = () => {
    const FooterItems = [
        {
            title: 'Chrome Family',
            options: [
                { text: 'Other Platforms' },
                { text: 'Chromebooks', share: true },
                { text: 'Chromecast', share: true },
            ]
        },
        {
            title: 'Enterprise',
            options: [
                { text: 'Download Chrome Browser', share: true },
                { text: 'Download Browser for Enterprise', share: true },
                { text: 'Chrome Devices', share: true },
                { text: 'ChromeOS', share: true },
                { text: 'Google Cloud', share: true },
                { text: 'Google Workspace', share: true },
            ]
        },
        {
            title: 'Education',
            options: [
                { text: 'Google Chrome Browser', share: true },
                { text: 'Devices', share: true },
                { text: 'Web Store', share: true },
            ]
        },
        {
            title: 'Dev and Partners',
            options: [
                { text: 'Chromium', share: true },
                { text: 'ChromeOS', share: true },
                { text: 'Chrome Web Store', share: true },
                { text: 'Chrome Experiments', share: true },
                { text: 'Chrome Beta' },
                { text: 'Chrome Dev' },
                { text: 'Chrome Canary' },
            ]
        },
        {
            title: 'Stay Connected',
            options: [
                { text: 'Chrome Help', share: true },
                { text: 'Google Chrome Blog', share: true },
                { text: 'Update Chrome' },
                { text: 'Chrome Help', share: true },
                { text: 'Chrome Tips' },
                { text: 'Google Chrome Blog', share: true },
            ]
        },
    ]
  return (
    <div>
      <div className='footer'>
            <div className="footerTop">
                <p>Follow us</p>
                <FaYoutube size={26} cursor={'pointer'} />
                <FaTwitter size={26} cursor={'pointer'} />
                <FaFacebookSquare size={26} cursor={'pointer'} />
            </div>
            <div className="footerMiddle">
                {FooterItems.map((footer, id) => (
                    <div className="" key={id}>
                        <h2>{footer.title}</h2>
                        <div className="innerItems">
                            {footer.options.map((item, id) => (
                                <div className="innerText" key={id}>
                                    <p>{item.text}</p>
                                    {item.share && <GoArrowUpRight size={17} className='icon' />}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="footerBottom">
                <div className="footerBottomLeft">
                    <h2>Google</h2>
                    <div className="terms">
                        <p>Privacy and Terms</p>
                        <p>About Google</p>
                        <p>Google Products</p>
                    </div>
                </div>
                <div className="footerBottomRight">
                    <AiFillQuestionCircle cursor={'pointer'} size={24} />
                    <p>Help</p>
                    <div className='language'>
                        <p>English - India</p>
                        <IoMdArrowDropdown size={24} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
