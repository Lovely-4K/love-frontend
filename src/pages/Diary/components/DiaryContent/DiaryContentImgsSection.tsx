import useDiaryForm from '../../hooks/DiaryContent/useDiaryForm';
import DiaryImgsCarousel from './DiaryImgsCarousel';
import DiaryImgsUpload from './DiaryImgsUpload';

const DiaryContentImgsSection = () => {
  const { editable } = useDiaryForm();

  return (
    <section>
      <span className="text-lg font-bold text-base-black">다이어리 내용</span>
      <div className="flex flex-col gap-4 py-2">
        {editable ? <DiaryImgsUpload /> : <DiaryImgsCarousel />}
      </div>
    </section>
  );
};

export default DiaryContentImgsSection;
