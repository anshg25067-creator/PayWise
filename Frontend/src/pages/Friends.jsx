import "../styles/friends.css"

function Friends() {
  return (
    <div className="page">
      <h1>Friends Page</h1>
      <p>Friends page content goes here.</p>
    </div>
  )

  // Mock data: Replace this array with your fetched backend data later
  const mockFriends = [
    { id: 1, name: "Alice Smith", username: "@alice_s", image: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Bob Johnson", username: "@bobj", image: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Charlie Brown", username: "@charlieb", image: "https://i.pravatar.cc/150?u=3" },
    { id: 4, name: "Diana Prince", username: "@wonder_d", image: "https://i.pravatar.cc/150?u=4" },
  ];

  return (
    <div className="page friends_page">
      <div className="friends_header">
        <h1>Friends around you</h1>
        
        {/* Search Bar Section */}
        <div className="search_bar_container">
          <input 
            type="text" 
            placeholder="Find friends..." 
            className="search_input" 
          />
          <button className="search_btn">Search</button>
        </div>
      </div>

      <div className="horizontal_line"></div>

      {/* Friends Cards Grid */}
      <div className="friends_grid">
        {mockFriends.map((friend) => (
          <div className="friend_card" key={friend.id}>
            <img 
              src={friend.image} 
              alt={friend.name} 
              className="friend_avatar" 
            />
            <div className="friend_details">
              <h3>{friend.name}</h3>
              <p>{friend.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Friends

