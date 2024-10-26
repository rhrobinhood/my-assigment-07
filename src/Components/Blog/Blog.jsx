import './Blog.css'

const Blog = ({ blog }) => {
        const {image, name, country} = blog;
    return (
        <div className='card'>
             <img src={image} alt="" />
            <h3>Nmae: {name}</h3>
            <p>Country:{country}</p>
        </div>
    );
};

export default Blog;




// {
//     "playerId": 8,
//     "name": "Rashid Khan",
//     "country": "Afghanistan",
//     "image": "https://i.ibb.co.com/jWVtkKh/virat-kohli.jpg",
//     "role": "Bowler",
//     "battingType": "Right-hand bat",
//     "bowlingType": "Right-arm legbreak",
//     "biddingPrice": "1.9M USD"
// }