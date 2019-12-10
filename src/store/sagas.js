


function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga