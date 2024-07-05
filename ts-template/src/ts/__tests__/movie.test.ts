import Movie from '../movie';

test('Movie class test', () => {
    const result = new Movie(1989, 'США', 'Всё будет хорошо!', 'Драма', 140);
    const correct = {
        year: 1989,
        country: 'США',
        slogan: 'Всё будет хорошо!',
        genre: 'Драма',
        length: 140
    };
    expect(result).toEqual(correct);
});