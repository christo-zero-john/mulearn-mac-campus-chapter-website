import imgWhatsapp from "../../../assets/img/social/whatsapp.svg";

function Header() {
  function requestToJoin() {
    document.getElementById("requestDiv").innerHTML = `
            <a class="btn btn-success" href="https://api.whatsapp.com/send?phone=919495806285&text=Hello%2C%20My%20name%20is%20%5BYour%20name%5D%20and%20I%20am%20%5Byour%20relationship%20with%20MAC%20Ramapuram%5D.%20I%20would%20like%20to%20join%20the%20muLearn%20whatsapp%20group%20of%20MAC%20Ramapuram.%20Please%20add%20me%20to%20the%20group.%20Thank%20you."><img src="${imgWhatsapp}" alt="" class="whatsapp"/>  Christo John</a>
    
            <a class="btn btn-danger" href="https://api.whatsapp.com/send?phone=919447356497&text=Hello%2C%20My%20name%20is%20%5BYour%20name%5D%20and%20I%20am%20%5Byour%20relationship%20with%20MAC%20Ramapuram%5D.%20I%20would%20like%20to%20join%20the%20muLearn%20whatsapp%20group%20of%20MAC%20Ramapuram.%20Please%20add%20me%20to%20the%20group.%20Thank%20you."> <img src="${imgWhatsapp}" alt="" class="whatsapp"/> Sir. Sunil K Joseph</a>
        `;
  }

  return (
    <div>
      {" "}
      <div className=" hero text-center mb-5 ">
        <h1 className="display-1 pt-5">Join Us</h1>
        <p>And Make Yourself a better you</p>
        <p className="px-3 px-md-4 overflow-auto no-scrollbar small text-left small">
          If you are still not in muLearn whatsapp group of MAC Ramapuram
          <span
            className="link-primary h5 rqBt d-block"
            onClick={requestToJoin}
          >
            Request To Join
          </span>
        </p>

        <div className="pt-3" id="requestDiv"></div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
