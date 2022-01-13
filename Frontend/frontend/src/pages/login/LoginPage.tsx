import "./LoginPage.scss";
import { useState } from "react";
import Logo from "../../assets/Logo_temp2.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";

export default function LoginPage() {
    return (
        <div className="Fullpage Fullpage-Low-Stripe">
            <section className="LoginSection">
                <div className="LAN">
                    <img src={Logo}></img>
                    <h1>Your online LAN-party planner!</h1>
                </div>
                <div className="LoginInfo">
                    <form>
                        <div>
                            <h2>Email:</h2>
                            <input placeholder="email"></input>
                        </div>
                        <div>
                            <h2>Password:</h2>
                            <input type="password" placeholder="password"></input>
                        </div>
                    </form>
                    <div className="Firebase">
                        <h2>Login with:</h2>
                        <BsGoogle className="Icons" />
                        <BsFacebook className="Icons" />
                        <BsGithub className="Icons" />
                    </div>
                </div>
            </section>
        </div>
    );
}
