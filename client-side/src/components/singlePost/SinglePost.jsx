import "./singlepost.css";
export default function SinglePost() {
  const user=false;
  return (
    <div id='single-post'>
      <div id='single-post-title-layout'>
        {" "}
        <span id='single-post-title'>
          Free Bus Rides Offer Indian Women New Option for Work, and Play
        </span>
      </div>

      <div id='single-post-img-layout'>
        <img
          src='https://pinchofyum.com/cdn-cgi/image/width=680,height=,fit=scale-down/wp-content/uploads/Tomato-Soup-3-1.jpg'
          alt=''
          id='single-post-img'
        />
        <div id="single-post-img-details">
         <span id="single-post-catagory">
           Food
          </span>
          <span id="single-post-date">
            created on : 12/11/2008
          </span>
          {user?
          <div  id="single-post-icons"> <i class="fa-solid fa-pen-to-square edit-blog" ></i>
          <i class="fa-solid fa-trash delete-blog"></i>
          </div>:""}
          

      </div>
      </div>
      

      <div id='single-post-desc-layout'>
        <span id="single-post-desc-author" >Author: <span> Mr X</span></span>
        <p id='single-post-para-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facilis
          culpa quod commodi assumenda voluptate rem hic aut laboriosam placeat,
          molestiae saepe exercitationem blanditiis reprehenderit autem ad
          nesciunt totam illo id amet accusantium ducimus velit dolorum
          mollitia! Qui sed deserunt rem assumenda accusamus error nisi placeat
          in pariatur libero voluptatem tempore veritatis, temporibus vitae
          neque eius laboriosam facilis expedita non, at atque ab harum.
          Deserunt sed, accusamus ea laborum excepturi asperiores? Rerum quia
          vitae tempora nesciunt? Neque in cumque beatae sapiente quibusdam
          aspernatur temporibus ipsa nemo sed quis architecto harum,
          necessitatibus animi aliquam odio minima, mollitia debitis! Porro,
          earum adipisci? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Qui nihil voluptatem adipisci aliquid aperiam inventore,
          expedita, animi eius tenetur rerum nisi ducimus explicabo dignissimos
          id dolores odit sit distinctio ad fugiat nobis quas commodi non
          excepturi. Similique fugiat maiores sit iusto dignissimos rerum ipsum
          debitis alias temporibus, quaerat quia ad libero repellendus,
          reprehenderit necessitatibus recusandae! Nisi minus blanditiis
          laudantium fugiat dolores, voluptatum amet atque repellendus
          consectetur obcaecati eos adipisci accusamus in inventore doloribus
          earum veniam. Doloremque consequatur excepturi ex harum inventore
          itaque vel magnam animi saepe blanditiis, sequi consequuntur
          reprehenderit a nesciunt placeat alias autem fugit perferendis.
          Corporis repudiandae, blanditiis totam odit natus nihil assumenda,
          cupiditate omnis libero unde, exercitationem pariatur corrupti fugiat.
          Ducimus libero ut, sed repellat dicta corrupti reprehenderit eaque!
          Temporibus laboriosam maiores, dolorum expedita animi explicabo fuga
          facere eius enim blanditiis? Blanditiis culpa temporibus vel natus,
          voluptatem in! Laboriosam sapiente, doloremque mollitia dicta vero
          aspernatur quasi veniam minima, recusandae excepturi asperiores,
          architecto in consequuntur! Id dolor dolore ab tenetur rem. Molestiae
          hic cupiditate illo pariatur impedit eveniet aliquid tempore? Repellat
          tempora dicta assumenda, nesciunt doloribus eveniet. Sunt alias
          aliquid, suscipit necessitatibus laboriosam temporibus veritatis, hic
          vitae quisquam doloribus impedit dignissimos quis quia eaque illum
          similique voluptates architecto!
        </p>
      </div>
    </div>
  );
}
