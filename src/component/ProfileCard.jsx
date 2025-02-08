function ProfileCard() {
  return (
    <>
      <div className="outer ">
        <div className="dot"></div>
        <div className="dashboard-firstcard">
          <div className="ray"></div>
          <div className="flex justify-between w-9/12">
            <div className="text text-large">Hi, User</div>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                <span className="w-2.5 h-2.5 me-1 bg-green-500 rounded-full"></span>
                Active
              </span>
            </div>
          </div>
          <div className="w-9/12 ">
            <div className="mt-2.5">
              <h5 className="text ">Total Balance</h5>
              <span className="coin-item style-1 gap-12 px-0 py-0">
                <div className="content flex justify-between ">
                  <div className="title">
                    <p className="lh-1 text-large  font-normal text text-3xl">
                      $ 9700
                    </p>
                  </div>
                  <div className="box-price">
                    <div className="flex start-btn justify-end">
                      <span>
                        <button
                          id="submitBtn"
                          type="submit"
                          className="btn-sm rounded-full bg-gradient-to-r from-[var(--btn-gradent-yellow)] to-[var(--btn-gradent-orange)] text-dark px-3 fs-12 border-none p-1.5 text-black/70 text-sm font-semibold"
                        >
                          Withdraw
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div className="line topl"></div>
          <div className="line leftl"></div>
          <div className="line bottoml"></div>
          <div className="line rightl"></div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
