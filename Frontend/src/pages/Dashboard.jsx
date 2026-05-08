
import "../styles/dashboard.css"

function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard Page</h1>
      <p>Dashboard content goes here.</p>
    </div>
  )
}

export default Dashboard
import "../styles/dashboard.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {

  const [userProfile, setUserProfile] = useState({
    name: "Rohit",
    img: "https://t3.ftcdn.net/jpg/13/11/22/86/360_F_1311228699_YoiLc5aJ3RWz3uRfdEtlV0UYSQjqf7RW.jpg"
  });

  const [toGive, setToGive] = useState([]);
  const [toGet, setToGet] = useState([]);
  const [historyData, setHistoryData] = useState([]);

  const [mockApi, setMockApi] = useState([]);

  const [formData, setFormData] = useState({
    username: "",
    amount: "",
    ispaid: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const transactionData = {
        username: formData.username,
        amount: Number(formData.amount),
        ispaid: formData.ispaid === "true"
      };

      const response = await axios.post(
        "http://localhost:3000/posts",
        transactionData
      );

      console.log("Data posted successfully:", response.data);

      alert(`Transaction logged for ${transactionData.username}`);

      setFormData({
        username: "",
        amount: "",
        ispaid: ""
      });

      fetchTransactions();

    } catch (error) {
      console.error("Error posting data:", error);
      alert("Error logging transaction. Please try again.");
    }
  };



  const handleRemind = (friendName, amount) => {
    alert(`Reminder sent to ${friendName} for ₹${amount}!`);
  };

  const fetchTransactions = async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts");

      console.log("Fetched Data:", response.data.posts);

      setMockApi(response.data.posts);

    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {

    const giveTemp = [];
    const getTemp = [];
    const historyTemp = [];

    mockApi.forEach((transaction) => {

      historyTemp.push({
        name: transaction.username,
        amount: transaction.amount,
        status: transaction.ispaid ? "cleared" : "not cleared",
      });

      if (transaction.ispaid === false) {

        if (transaction.amount < 0) {

          giveTemp.push({
            name: transaction.username,
            amount: Math.abs(transaction.amount)
          });

        } else if (transaction.amount > 0) {

          getTemp.push({
            name: transaction.username,
            amount: transaction.amount
          });

        }
      }
    });

    setToGive(giveTemp);
    setToGet(getTemp);
    setHistoryData(historyTemp);

  }, [mockApi]);

  return (
    <div className="page">

      <div className="main_content">

        <div className="sidebar">

          <div className="profile">
            <img
              className="profile_image"
              src={
                userProfile.img ||
                "https://t3.ftcdn.net/jpg/13/11/22/86/360_F_1311228699_YoiLc5aJ3RWz3uRfdEtlV0UYSQjqf7RW.jpg"
              }
              alt="Profile"
            />

            <h2>Hello, {userProfile.name}</h2>
          </div>

          <div className="horizontal_line"></div>

          <div className="chatbot_card">

            <div className="chatbot_header">
              <h3>PayWise Assistant</h3>
            </div>

            <div className="chatbot_body">

              <p>Hii, how can I help you today?</p>

              <form
                className="transaction_form"
                onSubmit={handleFormSubmit}
              >

                <div className="form_group">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username (e.g. Rahul)"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form_group">
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Amount in ₹ (e.g. 500 or -500)"
                    value={formData.amount}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form_group">
                  <select
                    id="ispaid"
                    name="ispaid"
                    value={formData.ispaid}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select Status
                    </option>

                    <option value="false">
                      Not Paid (False)
                    </option>

                    <option value="true">
                      Cleared (True)
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="chatbot_submit_btn"
                >
                  Add Record
                </button>

              </form>

            </div>

            <div className="chatbot_input_section">
              <input
                type="text"
                placeholder="Type your message..."
              />

              <button>Send</button>
            </div>

          </div>
        </div>

        <div className="mainbar">

          <h1>Dashboard</h1>

          <p>hows your day today??</p>

          <br></br>

          <div className="horizontal_line"></div>

          <div className="all_cards">

            <div className="to_card">

              <div className="card_header">
                <h3>To Give</h3>
              </div>

              <div className="card_list_body">

                {toGive.map((item, index) => (

                  <div className="list_item" key={index}>

                    <span className="friend_name">
                      {item.name}
                    </span>

                    <span className="amount_give">
                      ₹{item.amount}
                    </span>

                  </div>

                ))}

              </div>
            </div>

            <div className="to_card">

              <div className="card_header">
                <h3>To Get</h3>
              </div>

              <div className="card_list_body">

                {toGet.map((item, index) => (

                  <div className="list_item" key={index}>

                    <span className="friend_name">
                      {item.name}
                    </span>

                    <button
                      className="remind_btn"
                      onClick={() =>
                        handleRemind(item.name, item.amount)
                      }
                    >
                      Remind
                    </button>

                    <span className="amount_get">
                      ₹{item.amount}
                    </span>

                  </div>

                ))}

              </div>
            </div>
          </div>

          <div className="history">

            <div className="history_header">
              <h3>Past Tranx</h3>
            </div>

            <div className="card_list_body">

              {historyData.map((item, index) => (

                <div className="list_item" key={index}>

                  <span className="friend_name">
                    {item.name}
                  </span>

                  <span
                    className="tranx_status"
                    title={item.status}
                  >
                    {item.status === "cleared"
                      ? "cleared"
                      : "not cleared"}
                  </span>

                  <span
                    className={
                      item.amount > 0
                        ? "amount_get"
                        : "amount_give"
                    }
                  >
                    {item.amount > 0 ? "+" : "-"}₹
                    {Math.abs(item.amount)}
                  </span>

                </div>

              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;