import React from "react";
import "../../Styles/efmsStyle/Dashboard.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <nav>
        <div className="left">
          <img
            className="logo"
            src="https://web.truckx.com/static/media/logo-blue.d1cfc0e5.png"
          />
          <p className="dash-text">Dashboard</p>
        </div>
        <div className="right">
          <img
            className="star"
            src="https://web.truckx.com/static/media/newUpdatesCountIcon.e11ec997.svg"
          />
          <div className="demo-drop">
            <p>Demo Company </p>
            <KeyboardArrowDownIcon />
          </div>
          <div className="img-text">
          <img
            className="truck-img"
            src="data:image/jpeg;base64,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"
          />
          <div className="hash">
            <p className="demo-company">Demo Company</p>
            <div className="dn">
              <p className="dot">DOT # </p>
              <p className="dotnum">123412346</p>
            </div>
          </div>
            <div className="dropdown-content">
              <div className="dropdown-imgtext">
                <img src="https://web.truckx.com/static/media/companyProfileMenuIcon.bac795e0.svg" />
              <a href="#company-profile">Company Profile</a>
              </div>
              <div className="dropdown-imgtext">
                <img src="https://web.truckx.com/static/media/billingMenuIcon.4b9554b1.svg"/>
              <a href="#billing-details">Billing Details</a>
              </div>
              <div className="dropdown-imgtext">
                <img src="https://web.truckx.com/static/media/logoutMenuIcon.c722530f.svg"/>
              <a href="#logout" style={{color: "red"}}>Logout</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="menu-section">
        <ul>
          <div className="logon dashs">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                d="M14.3331 7.76658V3.23325C14.3331 2.23325 13.9064 1.83325 12.8464 1.83325H10.1531C9.09308 1.83325 8.66641 2.23325 8.66641 3.23325V7.76658C8.66641 8.76658 9.09308 9.16658 10.1531 9.16658H12.8464C13.9064 9.16658 14.3331 8.76658 14.3331 7.76658Z"
                fill="#1890FF"
              ></path>
              <path
                d="M7.33308 9.23325V13.7666C7.33308 14.7666 6.90641 15.1666 5.84641 15.1666H3.15308C2.09308 15.1666 1.66641 14.7666 1.66641 13.7666V9.23325C1.66641 8.23325 2.09308 7.83325 3.15308 7.83325H5.84641C6.90641 7.83325 7.33308 8.23325 7.33308 9.23325Z"
                fill="#1890FF"
              ></path>
              <path
                d="M14.3331 13.7667V11.9C14.3331 10.9 13.9064 10.5 12.8464 10.5H10.1531C9.09308 10.5 8.66641 10.9 8.66641 11.9V13.7667C8.66641 14.7667 9.09308 15.1667 10.1531 15.1667H12.8464C13.9064 15.1667 14.3331 14.7667 14.3331 13.7667Z"
                fill="#1890FF"
              ></path>
              <path
                d="M7.33308 5.09992V3.23325C7.33308 2.23325 6.90641 1.83325 5.84641 1.83325H3.15308C2.09308 1.83325 1.66641 2.23325 1.66641 3.23325V5.09992C1.66641 6.09992 2.09308 6.49992 3.15308 6.49992H5.84641C6.90641 6.49992 7.33308 6.09992 7.33308 5.09992Z"
                fill="#1890FF"
              ></path>
            </svg>
            <li className="dash">Dashboard</li>
          </div>
          <div className="logon">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                d="M6.00004 15.1666H10C13.3334 15.1666 14.6667 13.8333 14.6667 10.4999V6.49992C14.6667 3.16659 13.3334 1.83325 10 1.83325H6.00004C2.66671 1.83325 1.33337 3.16659 1.33337 6.49992V10.4999C1.33337 13.8333 2.66671 15.1666 6.00004 15.1666Z"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M4.88672 10.1601L6.47339 8.10009C6.70005 7.80675 7.12005 7.75342 7.41339 7.98009L8.63339 8.94009C8.92672 9.16675 9.34672 9.11342 9.57338 8.82675L11.1134 6.84009"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <li>HOS</li>
            <p className="plus" style={{paddingLeft:"5vw"}}>+</p>
          </div>
          <div className="logon">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                d="M8.00004 9.45321C9.1488 9.45321 10.08 8.52197 10.08 7.37321C10.08 6.22446 9.1488 5.29321 8.00004 5.29321C6.85129 5.29321 5.92004 6.22446 5.92004 7.37321C5.92004 8.52197 6.85129 9.45321 8.00004 9.45321Z"
                stroke="#2B3244"
                stroke-width="1.5"
              ></path>
              <path
                d="M2.4133 6.15992C3.72664 0.386587 12.28 0.393254 13.5866 6.16659C14.3533 9.55325 12.2466 12.4199 10.4 14.1933C9.05997 15.4866 6.93997 15.4866 5.5933 14.1933C3.7533 12.4199 1.64664 9.54659 2.4133 6.15992Z"
                stroke="#2B3244"
                stroke-width="1.5"
              ></path>
            </svg>
            <li>Location</li>
            <p className="plus" style={{paddingLeft:"3vw"}}>+</p>
          </div>
          <div className="logon">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                d="M11.9867 7.69334V10.36C11.9867 10.5333 11.98 10.7 11.96 10.86C11.8066 12.66 10.7466 13.5533 8.79331 13.5533H8.52665C8.35999 13.5533 8.19998 13.6333 8.09998 13.7667L7.29999 14.8333C6.94665 15.3067 6.37331 15.3067 6.01998 14.8333L5.21997 13.7667C5.1333 13.6533 4.93998 13.5533 4.79331 13.5533H4.52665C2.39999 13.5533 1.33331 13.0267 1.33331 10.36V7.69334C1.33331 5.74001 2.23332 4.68001 4.02665 4.52667C4.18665 4.50667 4.35332 4.5 4.52665 4.5H8.79331C10.92 4.5 11.9867 5.56667 11.9867 7.69334Z"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M14.6533 5.02659V7.69326C14.6533 9.65326 13.7533 10.7066 11.96 10.8599C11.98 10.6999 11.9867 10.5333 11.9867 10.3599V7.69326C11.9867 5.56659 10.92 4.49992 8.79333 4.49992H4.52667C4.35334 4.49992 4.18667 4.50659 4.02667 4.52659C4.18001 2.73326 5.24001 1.83325 7.19334 1.83325H11.46C13.5867 1.83325 14.6533 2.89992 14.6533 5.02659Z"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M8.99702 9.33333H9.00302"
                stroke="#2B3244"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M6.66365 9.33333H6.66965"
                stroke="#2B3244"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M4.33033 9.33333H4.33633"
                stroke="#2B3244"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <li>Messages</li>
          </div>
          <div className="logon">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                d="M4.50668 15.1666H11.4933C13.3333 15.1666 14.0667 14.0399 14.1533 12.6666L14.5 7.15992C14.5933 5.71992 13.4467 4.49992 12 4.49992C11.5933 4.49992 11.22 4.26659 11.0333 3.90659L10.5533 2.93992C10.2467 2.33325 9.44668 1.83325 8.76668 1.83325H7.24001C6.55334 1.83325 5.75334 2.33325 5.44668 2.93992L4.96668 3.90659C4.78001 4.26659 4.40668 4.49992 4.00001 4.49992C2.55334 4.49992 1.40668 5.71992 1.50001 7.15992L1.84668 12.6666C1.92668 14.0399 2.66668 15.1666 4.50668 15.1666Z"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M7 5.83325H9"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M7.99998 12.5001C9.19331 12.5001 10.1666 11.5267 10.1666 10.3334C10.1666 9.14008 9.19331 8.16675 7.99998 8.16675C6.80665 8.16675 5.83331 9.14008 5.83331 10.3334C5.83331 11.5267 6.80665 12.5001 7.99998 12.5001Z"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <li>Dashcams</li>
          </div>
          <div className="logon">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                d="M14.6667 4.49992V6.11325C14.6667 7.16658 14 7.83325 12.9467 7.83325H10.6667V3.17325C10.6667 2.43325 11.2734 1.83325 12.0134 1.83325C12.74 1.83992 13.4067 2.13325 13.8867 2.61325C14.3667 3.09992 14.6667 3.76659 14.6667 4.49992Z"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M1.33337 5.16659V14.4999C1.33337 15.0533 1.96004 15.3666 2.40004 15.0333L3.54004 14.1799C3.80671 13.9799 4.18004 14.0066 4.42004 14.2466L5.52671 15.3599C5.78671 15.6199 6.21337 15.6199 6.47337 15.3599L7.59337 14.2399C7.82671 14.0066 8.20004 13.9799 8.46004 14.1799L9.60004 15.0333C10.04 15.3599 10.6667 15.0466 10.6667 14.4999V3.16659C10.6667 2.43325 11.2667 1.83325 12 1.83325H4.66671H4.00004C2.00004 1.83325 1.33337 3.02659 1.33337 4.49992V5.16659Z"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M4.16663 7.16675H7.83329"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <li>Reports</li>
          </div>
          <div className="logon">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                d="M14.6666 4.49992V6.11325C14.6666 7.16658 14 7.83325 12.9466 7.83325H10.6666V3.17325C10.6666 2.43325 11.2733 1.83325 12.0133 1.83325C12.74 1.83992 13.4066 2.13325 13.8866 2.61325C14.3666 3.09992 14.6666 3.76659 14.6666 4.49992Z"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M1.33337 5.16659V14.4999C1.33337 15.0533 1.96004 15.3666 2.40004 15.0333L3.54004 14.1799C3.80671 13.9799 4.18004 14.0066 4.42004 14.2466L5.5267 15.3599C5.7867 15.6199 6.21338 15.6199 6.47338 15.3599L7.59337 14.2399C7.82671 14.0066 8.20004 13.9799 8.46004 14.1799L9.60004 15.0333C10.04 15.3599 10.6667 15.0466 10.6667 14.4999V3.16659C10.6667 2.43325 11.2667 1.83325 12 1.83325H4.66671H4.00004C2.00004 1.83325 1.33337 3.02659 1.33337 4.49992V5.16659Z"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M4.16663 7.16675H7.83329"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M6 8.99992V5.33325"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <li>IFTA</li>
            <p className="plus" style={{paddingLeft:"5vw"}}>+</p>
          </div>
          <div className="logon">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                d="M10 1.83325V8.49992C10 9.23325 9.40004 9.83325 8.66671 9.83325H1.33337V5.57992C1.82004 6.15992 2.56673 6.51992 3.39339 6.49992C4.06673 6.48659 4.67338 6.22659 5.12671 5.79325C5.33338 5.61992 5.50672 5.39991 5.64006 5.15991C5.88006 4.75325 6.01337 4.27323 6.00004 3.77323C5.98004 2.99323 5.63338 2.30659 5.09338 1.83325H10Z"
                stroke="#2B3244"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M14.6667 9.83325V11.8333C14.6667 12.9399 13.7734 13.8333 12.6667 13.8333H12C12 13.0999 11.4 12.4999 10.6667 12.4999C9.93337 12.4999 9.33337 13.0999 9.33337 13.8333H6.66671C6.66671 13.0999 6.06671 12.4999 5.33337 12.4999C4.60004 12.4999 4.00004 13.0999 4.00004 13.8333H3.33337C2.22671 13.8333 1.33337 12.9399 1.33337 11.8333V9.83325H8.66671C9.40004 9.83325 10 9.23325 10 8.49992V3.83325H11.2267C11.7067 3.83325 12.1467 4.09326 12.3867 4.50659L13.5267 6.49992H12.6667C12.3 6.49992 12 6.79992 12 7.16659V9.16659C12 9.53325 12.3 9.83325 12.6667 9.83325H14.6667Z"
                stroke="#2B3244"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M5.33333 15.1667C6.06971 15.1667 6.66667 14.5697 6.66667 13.8333C6.66667 13.097 6.06971 12.5 5.33333 12.5C4.59695 12.5 4 13.097 4 13.8333C4 14.5697 4.59695 15.1667 5.33333 15.1667Z"
                stroke="#2B3244"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M10.6666 15.1667C11.403 15.1667 12 14.5697 12 13.8333C12 13.097 11.403 12.5 10.6666 12.5C9.93027 12.5 9.33331 13.097 9.33331 13.8333C9.33331 14.5697 9.93027 15.1667 10.6666 15.1667Z"
                stroke="#2B3244"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M14.6667 8.5V9.83333H12.6667C12.3 9.83333 12 9.53333 12 9.16667V7.16667C12 6.8 12.3 6.5 12.6667 6.5H13.5267L14.6667 8.5Z"
                stroke="#2B3244"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M5.99999 3.77341C6.01333 4.27341 5.88001 4.75342 5.64001 5.16009C5.50667 5.40009 5.33333 5.6201 5.12666 5.79343C4.67333 6.22676 4.06668 6.48676 3.39334 6.50009C2.56668 6.52009 1.81999 6.16009 1.33333 5.58009C1.23999 5.48009 1.16 5.36676 1.08666 5.25343C0.826662 4.8601 0.679992 4.39345 0.666659 3.89345C0.646659 3.05345 1.01999 2.28676 1.61999 1.78676C2.07332 1.41342 2.64664 1.18009 3.27331 1.16676C3.97331 1.15343 4.61334 1.40676 5.09334 1.83343C5.63334 2.30676 5.97999 2.99341 5.99999 3.77341Z"
                stroke="#2B3244"
                stroke-width="1.25"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M2.29333 3.85343L2.96667 4.49341L4.35999 3.14673"
                stroke="#2B3244"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <li>Vehicles</li>
            <p className="plus" style={{paddingLeft:"3vw"}}>+</p>
          </div>
          <div className="logon">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                d="M6.10671 7.74658C6.04004 7.73992 5.96004 7.73992 5.88671 7.74658C4.30004 7.69325 3.04004 6.39325 3.04004 4.79325C3.04004 3.15992 4.36004 1.83325 6.00004 1.83325C7.63337 1.83325 8.96004 3.15992 8.96004 4.79325C8.95337 6.39325 7.69337 7.69325 6.10671 7.74658Z"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M10.9401 3.16675C12.2334 3.16675 13.2734 4.21341 13.2734 5.50008C13.2734 6.76008 12.2734 7.78675 11.0267 7.83341C10.9734 7.82675 10.9134 7.82675 10.8534 7.83341"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M2.77335 10.2067C1.16002 11.2867 1.16002 13.0467 2.77335 14.1201C4.60669 15.3467 7.61335 15.3467 9.44669 14.1201C11.06 13.0401 11.06 11.2801 9.44669 10.2067C7.62002 8.98675 4.61335 8.98675 2.77335 10.2067Z"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12.2267 13.8333C12.7067 13.7333 13.16 13.5399 13.5334 13.2533C14.5734 12.4733 14.5734 11.1866 13.5334 10.4066C13.1667 10.1266 12.72 9.93992 12.2467 9.83325"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <li>Drivers</li>
            <p className="plus" style={{paddingLeft:"3.6vw"}}>+</p>
          </div>
          <div className="logon">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                d="M6.66671 11.8001H4.14004C1.89337 11.8001 1.33337 11.2401 1.33337 8.99343V4.99343C1.33337 2.74677 1.89337 2.18677 4.14004 2.18677H11.16C13.4067 2.18677 13.9667 2.74677 13.9667 4.99343"
                stroke="#2B3244"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M6.66663 14.8134V11.8"
                stroke="#2B3244"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M1.33337 9.1333H6.66671"
                stroke="#2B3244"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M4.49329 14.8132H6.66662"
                stroke="#2B3244"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M14.6667 9.03339V12.8401C14.6667 14.4201 14.2734 14.8134 12.6934 14.8134H10.3267C8.74673 14.8134 8.35339 14.4201 8.35339 12.8401V9.03339C8.35339 7.45339 8.74673 7.06006 10.3267 7.06006H12.6934C14.2734 7.06006 14.6667 7.45339 14.6667 9.03339Z"
                stroke="#2B3244"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M11.4963 12.6666H11.5023"
                stroke="#2B3244"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <li>Devices</li>
            <p className="plus" style={{paddingLeft:"3.2vw"}}>+</p>
          </div>
          <div className="logon">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <g clip-path="url(#clip0_6235_481)">
                <path
                  d="M6.66669 7.16675C8.32354 7.16675 9.66669 5.8236 9.66669 4.16675C9.66669 2.50989 8.32354 1.16675 6.66669 1.16675C5.00983 1.16675 3.66669 2.50989 3.66669 4.16675C3.66669 5.8236 5.00983 7.16675 6.66669 7.16675Z"
                  stroke="#2B3244"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M1 13.8335C1 11.2535 3.33333 8.8335 7.33333 9.16686"
                  stroke="#2B3244"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.5445 9.94523C11.3709 9.73981 11.1952 9.53203 10.9368 9.5097C10.8625 9.50328 10.7873 9.5 10.7114 9.5C10.6356 9.5 10.5607 9.50326 10.4866 9.50964C10.2281 9.53191 10.0524 9.73975 9.87869 9.94522C9.82644 10.007 9.77437 10.0686 9.72028 10.1249C9.67086 10.1763 9.61346 10.2217 9.5486 10.2592C9.49877 10.2879 9.44707 10.3105 9.39439 10.3272C9.31981 10.3508 9.24133 10.3702 9.16258 10.3897C8.90197 10.4542 8.63843 10.5193 8.5036 10.7403C8.49307 10.7576 8.48274 10.775 8.4726 10.7925C8.32919 11.0406 8.43007 11.3274 8.52984 11.6111C8.56244 11.7038 8.59492 11.7961 8.61872 11.8866C8.6353 11.9497 8.64413 12.016 8.64413 12.0843C8.64413 12.1526 8.6353 12.2188 8.61872 12.2819C8.59493 12.3724 8.56245 12.4648 8.52985 12.5575C8.43009 12.8411 8.3292 13.128 8.47263 13.376C8.48273 13.3935 8.49304 13.4108 8.50355 13.428C8.63837 13.6491 8.90194 13.7143 9.16257 13.7787C9.24133 13.7982 9.31982 13.8176 9.39442 13.8412C9.4471 13.8579 9.4988 13.8805 9.54863 13.9093C9.61349 13.9467 9.67089 13.9921 9.72032 14.0435C9.77441 14.0998 9.82649 14.1614 9.87874 14.2232C10.0524 14.4287 10.2281 14.6366 10.4867 14.6589C10.5607 14.6652 10.6357 14.6685 10.7114 14.6685C10.7873 14.6685 10.8624 14.6652 10.9367 14.6588C11.1952 14.6365 11.3708 14.4287 11.5444 14.2232C11.5967 14.1614 11.6487 14.0999 11.7028 14.0436C11.7522 13.9922 11.8096 13.9468 11.8745 13.9093C11.9243 13.8805 11.976 13.8579 12.0286 13.8413C12.1032 13.8176 12.1816 13.7982 12.2603 13.7787C12.5209 13.7143 12.7843 13.6491 12.9191 13.4281C12.9297 13.4107 12.9401 13.3932 12.9503 13.3756C13.0936 13.1276 12.9928 12.8409 12.8931 12.5573C12.8605 12.4647 12.8281 12.3724 12.8043 12.2819C12.7877 12.2188 12.7789 12.1526 12.7789 12.0843C12.7789 12.016 12.7877 11.9497 12.8043 11.8866C12.8281 11.7962 12.8605 11.7039 12.8931 11.6112C12.9928 11.3277 13.0937 11.0409 12.9503 10.7929C12.9401 10.7752 12.9297 10.7577 12.9191 10.7403C12.7843 10.5193 12.5208 10.4541 12.2603 10.3897C12.1816 10.3702 12.1032 10.3508 12.0286 10.3272C11.976 10.3105 11.9243 10.2879 11.8745 10.2591C11.8096 10.2217 11.7522 10.1763 11.7028 10.1248C11.6487 10.0686 11.5967 10.007 11.5445 9.94523ZM10.6667 13.1667C10.1144 13.1667 9.66666 12.719 9.66666 12.1667C9.66666 11.6144 10.1144 11.1667 10.6667 11.1667C11.2189 11.1667 11.6667 11.6144 11.6667 12.1667C11.6667 12.719 11.2189 13.1667 10.6667 13.1667Z"
                  fill="#2B3244"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6235_481">
                  <rect
                    width="13.3333"
                    height="14.6667"
                    fill="white"
                    transform="translate(0.333313 0.166748)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <li>User Roles</li>
          </div>
          <div className="logon">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
              <path
                d="M3.05666 4.965C3.50999 3.01167 6.44333 3.01167 6.89667 4.965C7.15667 6.11167 6.43666 7.085 5.80332 7.685C5.34332 8.125 4.61667 8.125 4.15 7.685C3.51667 7.085 2.78999 6.11167 3.05666 4.965Z"
                stroke="#2B3244"
                stroke-width="1.5"
              ></path>
              <path
                d="M4.95919 5.44491H4.96518"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <rect
                x="1.08331"
                y="1.58325"
                width="11.8333"
                height="11.8333"
                rx="3.25"
                stroke="#2B3244"
                stroke-width="1.5"
              ></rect>
              <path
                d="M2.33331 12.8333L7.66665 8.83325M13 4.83325L7.66665 8.83325M11.6666 12.4999L7.66665 8.83325"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
            <li>Terminals</li>
          </div>
          <div className="logon">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                d="M5.33334 13.1667C5.33334 12.0622 4.43791 11.1667 3.33334 11.1667C2.22877 11.1667 1.33334 12.0622 1.33334 13.1667C1.33334 14.2713 2.22877 15.1667 3.33334 15.1667C4.43791 15.1667 5.33334 14.2713 5.33334 13.1667Z"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M10 3.83325C10 2.72868 9.10457 1.83325 8 1.83325C6.89543 1.83325 6 2.72868 6 3.83325C6 4.93782 6.89543 5.83325 8 5.83325C9.10457 5.83325 10 4.93782 10 3.83325Z"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M8 5.83341L8 8.83341M3.33334 11.1667L3.33334 8.83341L12.3333 8.83341L12.3333 11.1667"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <rect
                x="10"
                y="11.1667"
                width="4.66667"
                height="4"
                stroke="#2B3244"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></rect>
            </svg>
            <li>Workflows</li>
          </div>
          <div className="logon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8.08432 11.5295H8.83432C8.83432 11.1153 8.49853 10.7795 8.08432 10.7795V11.5295ZM8.08432 11.6142L8.08413 12.3642C8.28307 12.3642 8.47389 12.2852 8.61458 12.1446C8.75527 12.0039 8.83432 11.8131 8.83432 11.6142H8.08432ZM8.00027 11.6142H7.25027C7.25027 12.0283 7.58594 12.3641 8.00008 12.3642L8.00027 11.6142ZM8.00027 11.5295V10.7795C7.58606 10.7795 7.25027 11.1153 7.25027 11.5295H8.00027ZM8.7923 5.6001C8.7923 5.18588 8.45651 4.8501 8.0423 4.8501C7.62808 4.8501 7.2923 5.18588 7.2923 5.6001H8.7923ZM7.2923 8.98832C7.2923 9.40253 7.62808 9.73832 8.0423 9.73832C8.45651 9.73832 8.7923 9.40253 8.7923 8.98832H7.2923ZM7.33432 11.5295V11.6142H8.83432V11.5295H7.33432ZM8.08451 10.8642L8.00047 10.8642L8.00008 12.3642L8.08413 12.3642L8.08451 10.8642ZM8.75027 11.6142V11.5295H7.25027V11.6142H8.75027ZM8.00027 12.2795H8.08432V10.7795H8.00027V12.2795ZM7.2923 5.6001V8.98832H8.7923V5.6001H7.2923Z"
                fill="#2B3244"
              ></path>
              <path
                d="M6.26822 3C7.03802 1.66667 8.96252 1.66667 9.73232 3L14.5821 11.4C15.3519 12.7333 14.3896 14.4 12.85 14.4H3.15053C1.61092 14.4 0.648675 12.7333 1.41848 11.4L6.26822 3Z"
                stroke="#2B3244"
                stroke-width="1.5"
              ></path>
            </svg>
            <li>Alerts</li>
          </div>
          <div className="logon">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="M10.7231 0.75H12.2769C13.0424 0.75 13.5037 0.950495 13.7766 1.22338C14.0495 1.49626 14.25 1.95757 14.25 2.72313V4.27687C14.25 5.04242 14.0495 5.50374 13.7766 5.77662C13.5037 6.0495 13.0424 6.25 12.2769 6.25H10.7231C9.95758 6.25 9.49626 6.0495 9.22338 5.77662C8.9505 5.50374 8.75 5.04242 8.75 4.27687V2.72313C8.75 1.95757 8.9505 1.49626 9.22338 1.22338C9.49626 0.950495 9.95758 0.75 10.7231 0.75Z"
                stroke="#354365"
                stroke-width="1.5"
              ></path>
              <path
                d="M6.24995 10.7247H6.24995V10.7281V12.28C6.24995 13.0443 6.04958 13.5047 5.77688 13.7771C5.50403 14.0497 5.04261 14.25 4.27684 14.25H2.72311C1.95734 14.25 1.49635 14.0497 1.22366 13.7767C0.950841 13.5036 0.75 13.0411 0.75 12.2719V10.72C0.75 9.95567 0.950344 9.4957 1.2235 9.22347C1.49707 8.95082 1.96055 8.75 2.73129 8.75H4.28501C5.05105 8.75 5.51149 8.95045 5.78285 9.22271C6.05405 9.49481 6.25347 9.95607 6.24995 10.7247Z"
                stroke="#354365"
                stroke-width="1.5"
              ></path>
              <path
                d="M6.25 3.5C6.25 5.01878 5.01878 6.25 3.5 6.25C1.98122 6.25 0.75 5.01878 0.75 3.5C0.75 1.98122 1.98122 0.75 3.5 0.75C5.01878 0.75 6.25 1.98122 6.25 3.5Z"
                stroke="#354365"
                stroke-width="1.5"
              ></path>
              <path
                d="M14.25 11.5C14.25 13.0188 13.0188 14.25 11.5 14.25C9.98122 14.25 8.75 13.0188 8.75 11.5C8.75 9.98122 9.98122 8.75 11.5 8.75C13.0188 8.75 14.25 9.98122 14.25 11.5Z"
                stroke="#354365"
                stroke-width="1.5"
              ></path>
            </svg>
            <li>More</li>
            <p className="plus" style={{paddingLeft:"5vw"}}>+</p>
          </div>
        </ul>
      </div>

      <div className="graph-section">
        <div className="top">
        <h1>Welcome back Demo!</h1>
        <button className="live-button">
          <img src="https://web.truckx.com/static/media/redLiveIcon.bc47c5e9.svg"/>Live</button>
      </div>
      <div className="first-flex">
        <div className="fleet"># Drivers</div>
        <div className="fleet"># Asset Fleet Stats - Trucks</div>
        <div className="fleet"># Asset Fleet Stats - Trailer</div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
