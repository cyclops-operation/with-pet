import Image from 'next/image'

import Accordion from '~/components/Accordion'
import ResultAccordion from '~/pages/src/ui/result/result-accordion'

const Items = [
  {
    desertionNo: '411322202100842',
    filename:
      'http://www.animal.go.kr/files/shelter/2021/11/20211213141234_s.jpg',
    happenDt: '20211212',
    happenPlace: '논현동 180-5 인근',
    kindCd: '[개] 말티즈',
    colorCd: '흰',
    age: '2018(년생)',
    weight: '4.3(Kg)',
    noticeNo: '서울-강남-2021-00129',
    noticeSdt: '20211213',
    noticeEdt: '20211223',
    popfile: 'http://www.animal.go.kr/files/shelter/2021/11/20211213141234.jpg',
    processState: '종료(반환)',
    sexCd: 'M',
    neuterYn: 'N',
    specialMark:
      '매너벨트.배부분피부발적/피부질환.발톱긺.사람좋아함/매우활발/짖음.외이염.양슬개골.',
    careNm: '한국동물구조관리협회',
    careTel: '031-867-9119',
    careAddr: '경기도 양주시 남면 감악산로 63-37 (남면) 한국동물구조관리협회',
    orgNm: '서울특별시 강남구',
    chargeNm: '정복원',
    officetel: '02-3423-5508'
  },
  {
    desertionNo: '411322202100714',
    filename:
      'http://www.animal.go.kr/files/shelter/2021/10/202111021611120_s.jpg',
    happenDt: '20211102',
    happenPlace: '학동로227 인근',
    kindCd: '[개] 말티즈',
    colorCd: '흰',
    age: '2011(년생)',
    weight: '3.4(Kg)',
    noticeNo: '서울-강남-2021-00109',
    noticeSdt: '20211102',
    noticeEdt: '20211112',
    popfile:
      'http://www.animal.go.kr/files/shelter/2021/10/202111021611120.jpg',
    processState: '종료(반환)',
    sexCd: 'F',
    neuterYn: 'U',
    specialMark:
      '고령. 치석심함. 온순함. 얌전함. 꼬리단미안됨. 털때탐. 구강질환. 백내장. 피부질환. ',
    careNm: '한국동물구조관리협회',
    careTel: '031-867-9119',
    careAddr: '경기도 양주시 남면 감악산로 63-37 (남면) 한국동물구조관리협회',
    orgNm: '서울특별시 강남구',
    chargeNm: '정복원',
    officetel: '02-3423-5508'
  },
  {
    desertionNo: '411322202100486',
    filename:
      'http://www.animal.go.kr/files/shelter/2021/09/202109101409493_s.jpg',
    happenDt: '20210909',
    happenPlace: '역삼로 138 하나카 동물병원 인근',
    kindCd: '[개] 말티즈',
    colorCd: '흰',
    age: '2017(년생)',
    weight: '4.9(Kg)',
    noticeNo: '서울-강남-2021-00088',
    noticeSdt: '20210910',
    noticeEdt: '20210923',
    popfile:
      'http://www.animal.go.kr/files/shelter/2021/09/202109101409493.jpg',
    processState: '종료(입양)',
    sexCd: 'M',
    neuterYn: 'Y',
    specialMark:
      '연두+회색 케이지. 코검정. 네발/얼굴털 일부변색. 양위송곳니 유치인듯. 사람좋아함/얌전함.',
    careNm: '한국동물구조관리협회',
    careTel: '031-867-9119',
    careAddr: '경기도 양주시 남면 감악산로 63-37 (남면) 한국동물구조관리협회',
    orgNm: '서울특별시 강남구',
    chargeNm: '정복원',
    officetel: '02-3423-5508'
  },
  {
    desertionNo: '411322202100456',
    filename:
      'http://www.animal.go.kr/files/shelter/2021/08/202109021409448_s.jpg',
    happenDt: '20210901',
    happenPlace: '논현동 179-6 인근',
    kindCd: '[개] 말티즈',
    colorCd: '흰',
    age: '2017(년생)',
    weight: '4.1(Kg)',
    noticeNo: '서울-강남-2021-00086',
    noticeSdt: '20210902',
    noticeEdt: '20210913',
    popfile:
      'http://www.animal.go.kr/files/shelter/2021/08/202109021409448.jpg',
    processState: '종료(반환)',
    sexCd: 'M',
    neuterYn: 'N',
    specialMark:
      '코검정. 전신미용흔적(얼굴/양귀/꼬리 중간~끝털 더긺). 사람좋아함/매우활발함/짖음. 외이염.',
    careNm: '한국동물구조관리협회',
    careTel: '031-867-9119',
    careAddr: '경기도 양주시 남면 감악산로 63-37 (남면) 한국동물구조관리협회',
    orgNm: '서울특별시 강남구',
    chargeNm: '정복원',
    officetel: '02-3423-5508'
  },
  {
    desertionNo: '411322202100006',
    filename:
      'http://www.animal.go.kr/files/shelter/2020/11/202102011302862_s.jpg',
    happenDt: '20210131',
    happenPlace: '구룡터널 인근',
    kindCd: '[개] 말티즈',
    colorCd: '흰',
    age: '2013(년생)',
    weight: '2.1(Kg)',
    noticeNo: '서울-강남-2021-00006',
    noticeSdt: '20210201',
    noticeEdt: '20210215',
    popfile:
      'http://www.animal.go.kr/files/shelter/2020/11/202102011302862.jpg',
    processState: '종료(반환)',
    sexCd: 'M',
    neuterYn: 'Y',
    specialMark:
      '눈주변 변색. 코갈색. 양눈백내장. 생식기 약간 나와있음. 사람따름. 온순함. 덜덜떪.양슬개골. ',
    careNm: '한국동물구조관리협회',
    careTel: '031-867-9119',
    careAddr: '경기도 양주시 남면 감악산로 63-37 (남면) 한국동물구조관리협회',
    orgNm: '서울특별시 강남구',
    chargeNm: '정복원',
    officetel: '02-3423-5508'
  },
  {
    desertionNo: '411322202000799',
    filename:
      'http://www.animal.go.kr/files/shelter/2020/07/202011131411552_s.jpg',
    happenDt: '20201112',
    happenPlace: '수서동 공원 일대',
    kindCd: '[개] 말티즈',
    colorCd: '흰',
    age: '2012(년생)',
    weight: '5.2(Kg)',
    noticeNo: '서울-강남-2020-00223',
    noticeSdt: '20201113',
    noticeEdt: '20201123',
    popfile:
      'http://www.animal.go.kr/files/shelter/2020/07/202011131411552.jpg',
    processState: '종료(입양)',
    sexCd: 'F',
    neuterYn: 'U',
    specialMark:
      '눈곱/백내장/왼눈옆사마귀.오른윗송곳니/왼어금니빠짐.사람따름/낑낑댐.외이염피부질환.배수술자국.',
    careNm: '한국동물구조관리협회',
    careTel: '031-867-9119',
    careAddr: '경기도 양주시 남면 감악산로 63-37 (남면) 한국동물구조관리협회',
    orgNm: '서울특별시 강남구',
    chargeNm: '정복원',
    officetel: '02-3423-5508'
  },
  {
    desertionNo: '411322202000790',
    filename:
      'http://www.animal.go.kr/files/shelter/2020/10/202010301510896_s.jpg',
    happenDt: '20201029',
    happenPlace: '논현동 193-20 또래오래 논현점 인근',
    kindCd: '[개] 말티즈',
    colorCd: '흰',
    age: '2017(년생)',
    weight: '4.2(Kg)',
    noticeNo: '서울-강남-2020-00217',
    noticeSdt: '20201030',
    noticeEdt: '20201109',
    popfile:
      'http://www.animal.go.kr/files/shelter/2020/10/202010301510896.jpg',
    processState: '종료(반환)',
    sexCd: 'M',
    neuterYn: 'N',
    specialMark:
      '눈곱약간. 매우활발함/사람좋아함/낑낑댐/짖음. 꼬리단미안됨. 털상태 양호. 외이염. 피부질환. 왼슬개골.',
    careNm: '한국동물구조관리협회',
    careTel: '031-867-9119',
    careAddr: '경기도 양주시 남면 감악산로 63-37 (남면) 한국동물구조관리협회',
    orgNm: '서울특별시 강남구',
    chargeNm: '정복원',
    officetel: '02-3423-5508'
  },
  {
    desertionNo: '411322202000728',
    filename:
      'http://www.animal.go.kr/files/shelter/2020/09/202010051410999_s.jpg',
    happenDt: '20200929',
    happenPlace: '개포로 223 포이동물병원 인근',
    kindCd: '[개] 말티즈',
    colorCd: '흰',
    age: '2015(년생)',
    weight: '3(Kg)',
    noticeNo: '서울-강남-2020-00199',
    noticeSdt: '20201005',
    noticeEdt: '20201015',
    popfile:
      'http://www.animal.go.kr/files/shelter/2020/09/202010051410999.jpg',
    processState: '종료(반환)',
    sexCd: 'M',
    neuterYn: 'Y',
    specialMark: '전신미용흔적. 코분홍. 온순함/얌전함.',
    careNm: '한국동물구조관리협회',
    careTel: '031-867-9119',
    careAddr: '경기도 양주시 남면 감악산로 63-37 (남면) 한국동물구조관리협회',
    orgNm: '서울특별시 강남구',
    chargeNm: '정복원',
    officetel: '02-3423-5508'
  },
  {
    desertionNo: '411322202000679',
    filename:
      'http://www.animal.go.kr/files/shelter/2020/07/202009091409801_s.jpg',
    happenDt: '20200908',
    happenPlace: '역삼동 621-31 앞',
    kindCd: '[개] 말티즈',
    colorCd: '흰',
    age: '2017(년생)',
    weight: '3.4(Kg)',
    noticeNo: '서울-강남-2020-00184',
    noticeSdt: '20200909',
    noticeEdt: '20200921',
    popfile:
      'http://www.animal.go.kr/files/shelter/2020/07/202009091409801.jpg',
    processState: '종료(입양)',
    sexCd: 'M',
    neuterYn: 'Y',
    specialMark:
      '얼굴털일부변색.샴푸냄새남.사람좋아함/활발함/낑낑댐.양귀외이염.피부질환.양슬개골심함. ',
    careNm: '한국동물구조관리협회',
    careTel: '031-867-9119',
    careAddr: '경기도 양주시 남면 감악산로 63-37 (남면) 한국동물구조관리협회',
    orgNm: '서울특별시 강남구',
    chargeNm: '정복원',
    officetel: '02-3423-5508'
  },
  {
    desertionNo: '411322202000575',
    filename:
      'http://www.animal.go.kr/files/shelter/2020/07/202007141307775_s.jpg',
    happenDt: '20200713',
    happenPlace: '개포동 대치1차 아파트 108동 엘리베이터안',
    kindCd: '[개] 말티즈',
    colorCd: '흰',
    age: '2010(년생)',
    weight: '3.8(Kg)',
    noticeNo: '서울-강남-2020-00147',
    noticeSdt: '20200714',
    noticeEdt: '20200724',
    popfile:
      'http://www.animal.go.kr/files/shelter/2020/07/202007141307775.jpg',
    processState: '종료(반환)',
    sexCd: 'M',
    neuterYn: 'Y',
    specialMark:
      '고령.양눈백내장.눈곱.콧등살짝탈모.치석심함.여윔.기력없음.사람따름.얌전함.결막염.피부질환.',
    careNm: '한국동물구조관리협회',
    careTel: '031-867-9119',
    careAddr: '경기도 양주시 남면 감악산로 63-37 (남면) 한국동물구조관리협회',
    orgNm: '서울특별시 강남구',
    chargeNm: '정복원',
    officetel: '02-3423-5508'
  }
]

const ResultPage = () => {
  return (
    <div>
      <strong>총 {Items.length}건의 검색 결과</strong>
      <p>모든 유기동물들이 따뜻한 가족품으로 돌아가길 바랍니다.</p>
      <Accordion title='입력하신 정보입니다'>
        <ResultAccordion />
      </Accordion>
      <div>
        {Items.map(
          ({
            processState,
            desertionNo,
            sexCd,
            popfile,
            neuterYn,
            happenDt,
            happenPlace
          }) => (
            <div key={desertionNo}>
              <p>processState : 상태 {processState}</p>
              <p>sexCD : 성별 (M, F) {sexCd}</p>
              <p>neuterYn : 중성화 여부 (Y, N, U) {neuterYn}</p>
              <p>happenDt : 발견날짜? {happenDt}</p>
              <p>happenPlace : 발견위치 {happenPlace}</p>
              <div>
                popfile : 이미지
                <Image src={popfile} alt='' width={200} height={200} />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default ResultPage
