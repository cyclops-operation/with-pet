import Image from 'next/image'

import Accordion from '~/components/Accordion'
import useQueryData from '~/hooks/use-query-data'
import { GetFindPetsResult } from '~/interfaces/find/find-result.type'
import { queryKeys } from '~/lib/config/query-key'
import ResultAccordion from '~/pages/src/ui/result/result-accordion'

const ResultPage = () => {
  const Items = useQueryData<GetFindPetsResult>([
    queryKeys.FIND.GET_FIND_PETS_RESULT
  ])

  return (
    <div>
      <strong>총 {Items?.length}건의 검색 결과</strong>
      <p>모든 유기동물들이 따뜻한 가족품으로 돌아가길 바랍니다.</p>
      <Accordion title='입력하신 정보입니다'>
        <ResultAccordion />
      </Accordion>
      <div>
        {Items?.map(
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
