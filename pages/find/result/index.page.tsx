import Accordion from '~/components/Accordion'
import ResultAccordion from '~/pages/src/ui/result/result-accordion'

const ResultPage = () => {
  return (
    <div>
      <strong>총 32건의 검색 결과</strong>
      <p>모든 유기동물들이 따뜻한 가족품으로 돌아가길 바랍니다.</p>
      <Accordion title='입력하신 정보입니다'>
        <ResultAccordion />
      </Accordion>
    </div>
  )
}

export default ResultPage
