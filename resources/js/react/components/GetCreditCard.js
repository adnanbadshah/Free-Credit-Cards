import React, {useEffect} from 'react';
import { GenCC } from 'creditcard-generator';
import ClipboardJS from 'clipboard';

export default function GetCreditCard() {
    useEffect(() => {
        new ClipboardJS('button');
    }, []);

    return (
        <div className="container text-center">
            <img src="https://images.pexels.com/photos/164571/pexels-photo-164571.jpeg?cs=srgb&dl=pexels-pixabay-164571.jpg&fm=jpg"
                 alt="Free Credit Cards"
                 className="img-fluid"/>

                 <h1 className="mt-5 heading">Get Credit Card Information Absolutely For Free</h1>
            <hr className="w-75 heading"/>

            <p className="para mb-5 text-justify">
                Do you want to get free credit cards? Then this place is for you.
                This is one of the only few places on the internet where you can
                get working credit card information absoulutely for free. These credit
                cards are 100% tested by our team experts and they are also safe to use.
                Click on the generate buttons below in order to get your credit card number.
                These numbers are 100% clean so you can slap onto them any cvv or name as you like.
            </p>

            {genCardSection('amex')}
            {genCardSection('visa')}
            {genCardSection('mastercard')}

        </div>
    );


    function genCardSection(name) {
        return (
            <>
                <h2 className="card-name">
                    <span className="card-span">
                        {name === 'amex' ? 'AMERICAN EXPRESS':
                            name === 'visa' ? name.toUpperCase():
                                name === 'mastercard' ? name.toUpperCase(): null
                        }
                    </span>
                </h2>

                <div className="input-group input-group-lg my-5">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" onClick={(e) => {
                            if (document.getElementById(`input-${name}`).value !== '') {
                                const target = e.target;
                                $(target).popover('show');
                                setTimeout(() => $(target).popover('hide'), 500);
                            }
                        }} type="button" data-toggle="popover" data-placement="top" data-content="Copied" data-clipboard-target={`#input-${name}`}>Copy</button>
                    </div>

                    <input type="text" className="form-control disabled" id={`input-${name}`} placeholder="" aria-label=""
                           aria-describedby="basic-addon1" readOnly />


                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary"
                                onClick={() => document.getElementById(`input-${name}`).value = GenCC(name)}
                                type="button">Generate</button>
                    </div>
                </div>
            </>
        );
    }
}

