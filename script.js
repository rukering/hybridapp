document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const userInfo = document.getElementById('user-info');
    const userName = document.getElementById('user-name');
    const logoutButton = document.getElementById('logout-button');    
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const outputText = document.getElementById('output-text');

    button1.addEventListener('click', function () {
        // 버튼 클릭 시 실행될 코드
        outputText.textContent = '버튼 1을 클릭했습니다.';
    });
    button2.addEventListener('click', function() {
        outputText.textContent = '버튼 2를 클릭했습니다.';
    });
    

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // 실제 로그인 처리를 수행합니다.
        if (username === '사용자명' && password === '1234') {
            // 로그인 성공 시
            userInfo.style.display = 'block'; // 사용자 정보 엘리먼트 표시
            userName.textContent = username; // 사용자 이름 설정
            loginForm.style.display = 'none'; // 로그인 폼 숨김
        } else {
            alert('로그인 실패. 올바른 사용자명과 비밀번호를 입력하세요.');
        }
    });

    logoutButton.addEventListener('click', function () {
        // 로그아웃 버튼 클릭 시
        userInfo.style.display = 'none'; // 사용자 정보 엘리먼트 숨김
        loginForm.style.display = 'block'; // 로그인 폼 표시
    });
    
    

});
