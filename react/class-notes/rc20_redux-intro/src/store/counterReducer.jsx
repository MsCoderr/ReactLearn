const initialState = {
  count: 0,
  token: null,
};

//? action type'larının degisken olarak tanımlanması bizi bir çok case-sensitive hatasından kurtarır

export const arttir = "ARTTIR"
export const azalt = "AZALT"
export const sil = "SIL"

//? action creator fonksiyonlarının tanımlanması

export const arttirma = () => {
    return { type : arttir}
}

export const azaltma = () => ({ type : azalt})


export const silme = () => ({type : sil})

//? State'lerin değişimine karar veren reducer logic'i

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case arttir:
      return { count: state.count + 1 };
    case azalt:
      return { count: state.count - 1 };

    case sil:
      return { count: 0 };

    default:
      return state;
  }
};
