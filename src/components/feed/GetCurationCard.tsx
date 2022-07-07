import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { useEffect, useState } from 'react';
import React from 'react';

const curationSlice = require('@slices/dummy/curation/curationSlice');

const GetCurationCard = () => {
  //addFeed에서 받아와야하는 데이터: 지역, 시간대, 음주여부, 몇 명, 추가요청사항, 작성일, 답변 개수.

  const area = useSelector((state: RootState) => state.curation.area);
  const when = useSelector((state: RootState) => state.curation.when);
  const isDrink = useSelector((state: RootState) => state.curation.isDrink);
  const personnel = useSelector((state: RootState) => state.curation.personnel);
  const additionalText = useSelector(
    (state: RootState) => state.curation.additionalText
  );
  var isScrapped = useSelector((state: RootState) => state.curation.isScrapped);

  console.log(isScrapped);
  const [scrapState, setScrapState] = useState(isScrapped);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(curationSlice.actions.fetchCurationInfo());
  }, [dispatch]);
  console.log(area);

  const onClick = () => {
    scrapState ? setScrapState(false) : setScrapState(true);
    //scrapState 백에 넘겨줘야함.
  };

  return (
    <CurationContainer>
      <InfoContainer>
        <UpperContainer>
          <FirstLineInfo>
            <InfoText>#{area}</InfoText>
            <InfoText>#{isDrink}</InfoText>
          </FirstLineInfo>
          <SecondLineInfo>
            <InfoText>#{when}</InfoText>
            <InfoText>#{personnel}</InfoText>
          </SecondLineInfo>
          <ScrapButton onClick={onClick}>
            {scrapState ? (
              <img src={'img/Scrapped.png'} />
            ) : (
              <img src={'img/Scrap.png'} />
            )}
          </ScrapButton>
        </UpperContainer>
        <AdditionalText>{additionalText}</AdditionalText>
        <Line />
      </InfoContainer>
    </CurationContainer>
  );
};

export default React.memo(GetCurationCard);

const CurationContainer = styled.div`
  width: 341px;
  height: 193px;
  border: 1px solid #191919;
  margin: 16px 0;
  padding: 20px 16px 20px 10px;
  display: flex;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpperContainer = styled.div`
  display: flex;

  justify-content: space-between;
`;
const FirstLineInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const SecondLineInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const ScrapButton = styled.button`
  background-color: transparent;
  width: 24px;
  height: 24px;
  margin-left: auto;
`;
const InfoText = styled.div`
  padding-left: 10px;
  padding-bottom: 7px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;
//카드 디자인 방해하지 않도록 width넘어가면 말줄임으로 표시
const AdditionalText = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  padding: 17px 0 24px 10px;
  padding-bottom: 24px;
  width: 311px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Line = styled.div`
  border-bottom: 1px solid #191919;
  margin: 0 4px 0 10px;
`;
