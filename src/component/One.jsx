import React from "react";
import style from "./style/one.module.css";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { uiaction } from "./style/store/slice";

const One = () => {
  let dispatch = useDispatch();
  let [modal, setmodal] = useState(false);
  dispatch(uiaction.tanfs(modal));
  let Mymodal = () => {
    return (
      <div>
        <div className={style.mainmodal}>
          <RxCrossCircled onClick={() => setmodal(false)} />
          <div className={style.spansmodal}>
            Join now to enjoy our 7 days meal plans and thousands of recipies{" "}
            <br />
            <div className={style.seven}> start your 7 days trial for free</div>
          </div>

          <div class={style.gridscroll}>
            <img
              src="https://assets.website-files.com/606666aea1b1202a0508dc39/609d7fd4b188480ef4115649_fooding.jpeg"
              alt=""
              className={style.scrollimg}
            />

            <img
              src="https://assets.website-files.com/606666aea1b1202a0508dc39/609d7fd4b188480ef4115649_fooding.jpeg"
              alt=""
              className={style.scrollimg}
            />
            <img
              src="https://assets.website-files.com/606666aea1b1202a0508dc39/609d7fd4b188480ef4115649_fooding.jpeg"
              alt=""
              className={style.scrollimg}
            />
            <img
              src="https://assets.website-files.com/606666aea1b1202a0508dc39/609d7fd4b188480ef4115649_fooding.jpeg"
              alt=""
              className={style.scrollimg}
            />
            <img
              src="https://assets.website-files.com/606666aea1b1202a0508dc39/609d7fd4b188480ef4115649_fooding.jpeg"
              alt=""
              className={style.scrollimg}
            />
            <img
              src="https://assets.website-files.com/606666aea1b1202a0508dc39/609d7fd4b188480ef4115649_fooding.jpeg"
              alt=""
              className={style.scrollimg}
            />
            <img
              src="https://assets.website-files.com/606666aea1b1202a0508dc39/609d7fd4b188480ef4115649_fooding.jpeg"
              alt=""
              className={style.scrollimg}
            />
            <img
              src="https://assets.website-files.com/606666aea1b1202a0508dc39/609d7fd4b188480ef4115649_fooding.jpeg"
              alt=""
              className={style.scrollimg}
            />
          </div>
          <div>
            <button className={style.tff}>TRY FOR FREE</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={style.main}>
      <div className={style.master}>
        <div>
          <img
            src="https://assets.website-files.com/606666aea1b1202a0508dc39/609d7fd4b188480ef4115649_fooding.jpeg"
            alt=""
            onClick={() => setmodal(true)}
          />

          <span>A FAMILY FAVOURITE:SAMS STICKY CHICKEN</span>
        </div>

        <div>
          <img
            src="https://assets.website-files.com/606666aea1b1202a0508dc39/609d7fd4b188480ef4115649_fooding.jpeg"
            alt=""
            onClick={() => setmodal(true)}
          />
          <span>A FAMILY FAVOURITE:SAMS STICKY CHICKEN</span>
        </div>

        <div>
          <img
            src="https://assets.website-files.com/606666aea1b1202a0508dc39/609d7fd4b188480ef4115649_fooding.jpeg"
            alt=""
            onClick={() => setmodal(true)}
          />
          <span>A FAMILY FAVOURITE:SAMS STICKY CHICKEN</span>
        </div>

        <div>
          <img
            src="https://assets.website-files.com/606666aea1b1202a0508dc39/609d7fd4b188480ef4115649_fooding.jpeg"
            alt=""
            onClick={() => setmodal(true)}
          />
          <span>A FAMILY FAVOURITE:SAMS STICKY CHICKEN</span>
        </div>
        <div>
          <img
            src="https://assets.website-files.com/606666aea1b1202a0508dc39/609d7fd4b188480ef4115649_fooding.jpeg"
            alt=""
            onClick={() => setmodal(true)}
          />
          <span>A FAMILY FAVOURITE:SAMS STICKY CHICKEN</span>
        </div>
        <div>
          <img
            src="https://assets.website-files.com/606666aea1b1202a0508dc39/609d7fd4b188480ef4115649_fooding.jpeg"
            alt=""
            onClick={() => setmodal(true)}
          />
          <span>A FAMILY FAVOURITE:SAMS STICKY CHICKEN</span>
        </div>
      </div>

      <button>TRY FOR FREE</button>
      {modal && <Mymodal />}
    </div>
  );
};

export default One;
