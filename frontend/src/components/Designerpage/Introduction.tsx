import styled from 'styled-components'
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';
import Map from '../Commons/Map';
import { useRecoilValue } from 'recoil';
import { designerAtom } from '../../store/atoms';
import { Link, useParams } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .updatebutton {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    width: 160px;
    height: 40px;
    border: 1px solid #d2d2d0;
    :hover {
      background-color: #e0e0e0;
    }
    :active {
      background-color: #d2d2d0;
    }
    svg {
      margin-right: 5px;
    }
  }
  .infobox {
    width: 768px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #e0e0e0;
    .infocontents {
      margin: 20px;
      .tagcontent {
        text-align: left;
      }
    }
    .infocontent {
      margin-top: 10px;
      display: flex;
      align-items: center;
      .tag {
        text-align: left;
        font-size: 20px;
        font-weight: 500;
        width: 120px;
      }
    }
  }
  .introductionbox {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 768px;
    min-height: 100px;
    border: 1px solid #e0e0e0;
    padding: 20px;
    img {
      width: 350px;
      height: 350px;
      margin-left: 20px;
    }
    .content {
      /* padding: 20px; */
      white-space: pre-wrap;
      margin: 20px;
      font-size: 18px;
      text-align: left;
    }
  }
`;

interface IState {
  content: {
    imgurl: string;
    content: string;
  }
}

function Introduction() {
  // const [content, setContent] = useState<IState["content"]>(
  //   {
  //     imgurl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MDlfMjYw%2FMDAxNjI4NTAwNDU3NjQ2.y6HMk-12DUgv3FSOysuLr0GYz9OdQkSq6-VVPiQmxi8g.NvqUANKYigGgV6v-ysx4GotLQxFl384ExMedS_S_nAkg.JPEG.hery3436%2FIMG_4464.jpg&type=sc960_832",
  //     content: "dadaism__official\n????\n???????????????.\n????????????????????? ???????\n\n????????? ????????? ???????????????\n????????????\n???????????? ???????????? !\n\n \"???????????? ??????\"\n\n???????????? ????????? ????????? ???????????? ???????????? ???????? ????\n\n????????? ????????? ????????? ????????? ?????? ????????????..!\n\n???????????????????"
  //   },
  // )
  const {userSeq} = useParams();
  const designer = useRecoilValue(designerAtom)  
  
  return (
    <Wrapper>
      {sessionStorage.getItem("userSeq") === userSeq &&
      <Link to={`/designerpage/${userSeq}/updateintroduction`}>
        <button className="updatebutton">
          <CreateIcon />
          ?????? ??????
        </button>
      </Link>}
      <div className="infobox">
        <div className="infocontents">
          <div className="infocontent">
            <div className="tag">???????????? ???</div>
            <div className="tagcontent">
              {designer.designerInfo.designerShopName}
            </div>
          </div>
          <div className="infocontent">
            <div className="tag">?????????</div>
            <div className="tagcontent">
              {designer.designerInfo.designerTel}
            </div>
          </div>
          <div className="infocontent">
            <div className="tag">????????????</div>
            <div className="tagcontent">
              {designer.designerInfo.designerShopOpen} ~{" "}
              {designer.designerInfo.designerShopClose}
            </div>
          </div>
          <div className="infocontent">
            <div className="tag">??? ??????</div>
          </div>
          <div className="tagcontent">
            {designer.designerInfo.designerAddress}
          </div>
        </div>
        <Map
          location={designer.designerInfo.designerAddress}
          shopName={designer.designerInfo.designerShopName}
        />
      </div>
      <div className="introductionbox">
        <div className="content">
          {designer.designerInfo.designerInfoDesc
            ? designer.designerInfo.designerInfoDesc
            : "???????????? ????????????."}
        </div>
        {designer.designerInfo.designerInfoImgUrl && (
          <img src={designer.designerInfo.designerInfoImgUrl} alt="" />
        )}
      </div>
    </Wrapper>
  );
}

export default Introduction