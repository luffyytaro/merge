import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();
    return(
        <section className="h-full w-full lg:w-[40rem]">
            <article>
                <div>
                    <div>456</div>
                    <div>+</div>
                </div>
                <div>
                    <section>
                        <div>929</div>
                        <p>Post</p>
                    </section>
                    <section>
                        <div>1020</div>
                        <p>Followers</p>
                    </section>
                    <section>
                        <div>342</div>
                        <p>Following</p>
                    </section>
                </div>
            </article>
        </section>
    );
}