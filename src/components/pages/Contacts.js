const Contacts = () => {
    return ( 
    <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Kiyv, Ukraine</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / Viber</h2>
                        <p><a href="tel:+380987590736">+380 (98) 759-07-36</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:webdev@protonmail.com">geogen1999@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
     );
}
 
export default Contacts ;