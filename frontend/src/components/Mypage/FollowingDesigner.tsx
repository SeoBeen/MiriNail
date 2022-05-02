import React, { useState } from "react";
import styled from "styled-components";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useMutation, useQuery } from "react-query";
import { getFollowees, postFollow } from "../../store/apis/follow";
import { useNavigate, useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner"

const Wrapper = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;

  .cards {
    width: 90%;
    /* border: 1px solid black; */
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    margin: 20px 0 0 40px;
  }
  .card {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 450px;
    height: 220px;
    margin: 10px 20px 30px 20px;
    padding: 20px 0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
    :hover {
      background-color: #f8f8fa;
    }
    .cardleft {
      border-right: 1px solid #d2d2d0;
      width: 180px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        border-radius: 50%;
        width: 110px;
        height: 110px;
      }
    }
    .cardright {
      padding: 0 10px 0 0;
      width: 260px;
      height: 100%;
      text-align: left;
      .cardright-top {
        padding-left: 25px;
        padding-top: 10px;
        /* padding: 10px 0 10px 15px; */
        height: 80px;
        border-bottom: 1px solid #d2d2d0;
        font-weight: 500;
        .name {
          font-size: 22px;
        }
        .shop {
          color: #717171;
        }
      }
      .cardright-bottom {
        position: relative;
        padding: 15px 0 0 25px;
        height: 100px;
        font-size: 18px;
        div {
          display: flex;
          align-items: center;
        }
        .follow {
          position: absolute;
          width: 25px;
          height: 25px;
          bottom: 10px;
          right: 10px;
          :hover {
            transform:scale(1.1); 
          }
        }
        .designericon {
          margin-right: 10px;
        }
      }
    }
  }
  .pagination {
    margin: 20px 0;
  }
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
  }
`;

interface IState {
  designer: {
    name: string;
    shop: string;
    imgurl: string;
    follower: number;
  }
}

const FollowingDesigner = () => {
  const navigate = useNavigate();
  const { userSeq } = useParams();

  const { data, isLoading } = useQuery<any, Error>(
    ["getFollowee" ],
    async () => {
      return await getFollowees(Number(userSeq));
    },
    {
      onSuccess: (res) => {
        console.log(res);
        // setNailarts(res.content);
      },
      onError: (err: any) => console.log(err),
    }
  );

  const onClickDesigner = (designerSeq:number) => {
    navigate(`/designerpage/${designerSeq}/new`)
  }

  return (
    <Wrapper>
      {isLoading ? (
        <div className="loading">
          <TailSpin height={50} width={50} color="gray" />
        </div>
      ) : (
        <div className="cards">
          {data?.map((designer: any, idx: number) => {
            return (
              <div
                className="card"
                key={idx}
                onClick={() => {
                  onClickDesigner(designer.designerSeq);
                }}
              >
                <div className="cardleft">
                  <img src={designer.user.userProfileImg} alt="" />
                </div>
                <div className="cardright">
                  <div className="cardright-top">
                    <div className="name">{designer.designerShopName}</div>
                    <div className="shop">{designer.designerAddress}</div>
                  </div>
                  <div className="cardright-bottom">
                    <div>
                      <AccessTimeIcon className="designericon" />
                      {designer.designerShopOpen
                        ? designer.designerShopOpen
                        : ""}{" "}
                      -{" "}
                      {designer.designerShopClose
                        ? designer.designerShopClose
                        : ""}
                    </div>
                    <div>
                      <PhoneIcon className="designericon" />
                      {designer.user.userTel ? designer.user.userTel : "-"}
                    </div>
                    {/* <FavoriteIcon
                    className="follow"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      console.log("dds");
                    }}
                    color="error"
                  /> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Wrapper>
  );
}
export default FollowingDesigner