import React from 'react'
import "./AboutUsContentStyle.css";

function AboutContent() {
  return (
    <div>
        <main className='AboutUsContentStyle'>
            <div>
                <section className="aboutSection">
                    <h2>🎬 Our Mission</h2>
                    <p>
                    We are a next-generation streaming platform built to bring your favorite movies, 
                    shows and live events together in one place. Our mission is to connect creators 
                    and audiences through high-quality, ad-free entertainment — anytime, anywhere.
                    </p>
                </section>


                <section className="aboutSection">
                    <h2>⭐ Why Choose Us?</h2>
                    <p>
                    Unlike other platforms, we put <strong>you</strong> at the center of the experience. 
                    No endless ads, no hidden fees, no frustration. Just pure, uninterrupted entertainment 
                    crafted for people who love great content. Whether you're watching on your phone during 
                    your commute or on your big screen at home, we deliver cinema-quality streaming at every moment.
                    </p>
                </section>


                <section className="aboutSection">
                    <h2>⚡ Simple. Fast. Intuitive.</h2>
                    <p>
                    We believe great entertainment shouldn't be complicated. Our platform is designed 
                    to be effortlessly easy to use — discover new content in seconds, pick up exactly 
                    where you left off, and enjoy a seamless experience across all your devices. 
                    Smart recommendations learn your taste over time, so the more you watch, 
                    the better it gets.
                    </p>
                </section>


                <section className="aboutSection">
                    <h2>🌍 A World of Content at Your Fingertips</h2>
                    <p>
                    From the latest Hollywood blockbusters to international series, indie films, 
                    documentaries, and live sports — our ever-growing library has something for everyone. 
                    With new titles added every week, you'll never run out of things to watch. 
                    Explore genres, discover hidden gems, and experience stories from every corner of the world.
                    </p>
                </section>


                <section className="aboutSection">
                    <h2>💙 Built Around Your Satisfaction</h2>
                    <p>
                    Your satisfaction is not just a priority — it's our foundation. 
                    We listen to our community, constantly improving our platform based on real feedback. 
                    Our 24/7 support team is always ready to help, and our commitment to a 
                    <strong> 100% ad-free experience</strong> means your time is always respected. 
                    Join millions of happy viewers who made the switch and never looked back.
                    </p>
                </section>


                <section className="aboutSection cta">
                    <h2>🚀 Ready to Start Watching?</h2>
                    <p>
                    Join our growing community today. Sign up in less than 60 seconds, 
                    explore thousands of titles for free, and discover why we're the streaming 
                    platform people actually love. Your next favorite show is waiting for you.
                    </p>
                    <button className="ctaButton">Get Started — It's Free</button>
                </section>

            </div>

            <div>
                <img src='/public/AboutUsUllistrate.png'/>
            </div>
        </main>
    </div>
  )
}

export default AboutContent