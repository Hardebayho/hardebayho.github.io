class Project {
  final String title;
  final String description;
  final String url;
  final String asset;

  Project({
    required this.title,
    required this.description,
    required this.url,
    required this.asset,
  });
}

final projects = <Project>[
  Project(
    asset: 'assets/images/logo.png',
    title: 'Libmediafy',
    description: 'Multimedia library for Android made with C++',
    url: 'https://github.com/Hardebayho/libmediafy',
  ),
  Project(
    asset: 'assets/images/simple_music.png',
    title: 'Simple Music',
    description:
        'Simple music player with beautiful UI for Android made with Kotlin and Jetpack Compose',
    url: 'https://github.com/Hardebayho/simple_music',
  ),
];
