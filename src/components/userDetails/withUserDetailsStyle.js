import styled from 'styled-components';

export default (Component) => styled(Component)`
  display: flex;
  flex-direction: row;

  .user-page__content {
    margin: 10px 0;
    width: calc(100% - 340px);

    /* USER CONTENT */

    .user-page__user {
      display: flex;
      flex-direction: row;
      padding: 15px 20px;
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }

      .user__img {
        @media screen and (max-width: 1024px) {
          width: 45%;
        }
        @media screen and (max-width: 768) {
          width: 80%;
          min-width: 280px;
          margin: auto;
        }
        img {
          width: 327px;
          height: 327px;
          @media screen and (max-width: 1024px) {
            width: 100%;
            height: auto;
          }
        }
      }

      .user__details {
        margin: 0 0 0 40px;

        @media screen and (max-width: 768px) {
          margin: 0;
        }

        .user__name {
            color: #BDBDBD;
            font-size: 18px;
            line-height: 22px;
            font-weight: bold;
            max-width: 270px;
        }
        .user__bio {
            font-weight: normal;
            text-transform: uppercase;
            height: 30px;
            font-size: 14px;
            padding: 10px;
          }
          .user_infos{

            width: 100%;

            display: flex;
             flex-direction: row;
            flex-wrap: wrap;
            margin-top: 20px;
            justify-content: center;
          }
          .user_infos-it{
              margin: 20px;
              cursor: pointer;
          }
        }

      }
    }  
  }

  /* RECOMMENDER */

  .user-page__recommender {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 340px;
    border-left: 1px solid #DEDEDE;
    margin-top: 21px;

    .user-page__recommender-title {
      height: 27px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      background-color:  #BDBDBD;
      font-size: 18px;
      font-weight: bold;
    }

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`;
