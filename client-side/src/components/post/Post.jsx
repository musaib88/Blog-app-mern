import "./post.css";
import { Link } from "react-router-dom";

export default function Post() {
  return ( <Link  to='./single/:postId' className="link">
    <div id='post-layout'>
      <div id='post-img-layout'>
        <img
          src='https://picsum.photos/536/354'
          alt=''
          id='post-img'
        />
      </div>
      <div id='post-details'>
        <span id='post-catagory'>Tech</span>
        <span id='post-date'> created on : 13/12/1996</span>
      </div>

       <span id='post-title'>  Unemploymet in IT sector </span>
      <p id='post-desc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        minus repudiandae vel beatae explicabo corrupti quis odio quas, earum
        accusantium! Corporis, dolorum id. Hic in cum recusandae dolorem commodi
        accusamus esse rem eos doloremque quia Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Illum voluptate minima non corporis culpa,
        quae necessitatibus, nulla excepturi, at deserunt aliquam omnis ratione
        itaque doloribus enim ullam amet eos! Voluptas! Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Dolorum, voluptatibus quisquam
        corrupti, placeat mollitia nemo delectus aliquam atque perferendis, a
        nesciunt fugiat. Tempora, aliquam cumque temporibus tenetur deserunt
        minima aperiam.
      </p>
    </div>
    </Link>
  );
}
