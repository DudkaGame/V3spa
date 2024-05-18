import povar from './povar.jpg';

function About () {
    return(
        <div>
            <h3>Welcome to Cooking Classy</h3>
  
            <h5>Here you’ll find a collection of delicious recipes that your family will love, all tested and approved by me, creator of this food blog. Cooking is my passion so please follow along and share what I create! </h5> 

            <img src={povar} alt=""/>
        </div>
      );
}

export { About }