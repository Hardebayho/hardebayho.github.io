import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/projects.dart';
import 'package:url_launcher/url_launcher.dart';

class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text(
          'Adebayo Jagunmolu',
          style: GoogleFonts.acme(
            textStyle: Theme.of(context)
                .appBarTheme
                .titleTextStyle
                ?.copyWith(color: Colors.grey),
          ),
        ),
      ),
      body: const AppBody(),
    );
  }
}

class AppBody extends StatelessWidget {
  const AppBody({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: ListView(
        children: [
          const Hero(),
          const VerticalDivider(),
          const Projects(),
          const VerticalDivider(),
          const MakeEnquiry(),
          const VerticalDivider(),
          const Footer(),
        ],
      ),
    );
  }
}

class Hero extends StatelessWidget {
  const Hero({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16.0),
      color: const Color.fromARGB(255, 18, 19, 18),
      child: AppPadding(
        child: Material(
          color: Colors.transparent,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  'CREATIVE MIND, CREATIVE WORKS',
                  style: Theme.of(context)
                      .textTheme
                      .bodyText2
                      ?.copyWith(color: Colors.cyan),
                ),
              ),
              const SizedBox(height: 16),
              SizedBox(
                width: 400,
                child: Text(
                  'Computer Programmer, Web Developer & Flutter Developer.',
                  style: GoogleFonts.abrilFatface(
                    textStyle: Theme.of(context).textTheme.headline3,
                    color: Colors.white,
                  ),
                  textAlign: TextAlign.center,
                ),
              ),
              const SizedBox(height: 32),
              MyButton(
                text: 'HIRE ME NOW!',
                onTap: () {
                  showDialog(
                      context: context,
                      builder: (context) {
                        return const AlertDialog(
                          title: Text('HIRE ME'),
                          content: Text(
                            'Hit me up at hardebahyho@gmail.com so we can talk 😊',
                          ),
                        );
                      });
                },
              ),
              const SizedBox(height: 100),
              const HeroCards(),
            ],
          ),
        ),
      ),
    );
  }
}

class HeroCards extends StatelessWidget {
  const HeroCards({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Wrap(
      children: _buildChildren(),
    );
  }

  List<Widget> _buildChildren() {
    return [
      const HeroCard(
        icon: Icons.lightbulb_rounded,
        title: 'Fast Iterations.',
        content:
            'With the power of Flutter, I am able to create beautiful and fast user interfaces in record time! Bring your UI to life with the power of Dart and flutter!',
      ),
      const HeroCard(
        icon: Icons.lightbulb_rounded,
        title: 'Modern Systems Programming Languages.',
        content:
            'Backed by the awesome internet, I have extensive knowledge in systems programming languages like C/C++, Rust, Kotlin, Java, Javascript and PHP',
      ),
      const HeroCard(
        icon: Icons.lightbulb_rounded,
        title: 'Creative Solutions.',
        content:
            'ↈ Ability to work without supervision.\n\nↈ Insatiable drive for learning and discovering new technologies\n\n ↈ Efficient team player',
      ),
    ];
  }
}

class Projects extends StatelessWidget {
  const Projects({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 16.0),
      child: AppPadding(
        child: Column(
          children: [
            Row(
              children: [
                const SmallDivider(),
                const SizedBox(width: 8),
                Text(
                  'Projects',
                  style: GoogleFonts.abrilFatface(
                    textStyle: Theme.of(context).textTheme.headline3,
                    color: Colors.white,
                  ),
                ),
              ],
            ),
            Align(
              alignment: Alignment.centerLeft,
              child: Text(
                'THINGS I\'VE MADE',
                style: Theme.of(context).textTheme.subtitle1?.copyWith(
                      color: Colors.cyan,
                    ),
              ),
            ),
            const SizedBox(height: 50),
            GridView.builder(
                shrinkWrap: true,
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount:
                      MediaQuery.of(context).size.width > 800 ? 2 : 1,
                  mainAxisSpacing: 8.0,
                  crossAxisSpacing: 8.0,
                ),
                itemCount: projects.length,
                itemBuilder: (context, index) {
                  return ProjectItem(project: projects[index]);
                }),
          ],
        ),
      ),
    );
  }
}

class ProjectItem extends StatelessWidget {
  final Project project;
  const ProjectItem({
    Key? key,
    required this.project,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GridTile(
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16.0),
        child: Stack(
          children: [
            Positioned.fill(
              child: Image.asset(
                project.asset,
                fit: BoxFit.cover,
              ),
            ),
            const Positioned.fill(
              child: ColoredBox(
                color: Colors.black38,
              ),
            ),
            Positioned.fill(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    project.title,
                    style: GoogleFonts.aclonica(
                      textStyle:
                          Theme.of(context).textTheme.headline4?.copyWith(
                        shadows: [
                          const BoxShadow(
                            blurRadius: 4.0,
                            spreadRadius: 4.0,
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 8.0),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(
                      project.description,
                      style: GoogleFonts.aldrich(
                        textStyle:
                            Theme.of(context).textTheme.subtitle1?.copyWith(
                          shadows: [
                            const BoxShadow(
                              blurRadius: 4.0,
                              spreadRadius: 4.0,
                            ),
                          ],
                        ),
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ),
                ],
              ),
            )
          ],
        ),
      ),
      footer: Center(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Material(
            borderRadius: BorderRadius.circular(8.0),
            child: InkWell(
              onTap: _launchUrl,
              child: const Padding(
                padding: EdgeInsets.symmetric(
                  vertical: 16.0,
                  horizontal: 32.0,
                ),
                child: Text('Visit'),
              ),
            ),
          ),
        ),
      ),
    );
  }

  void _launchUrl() async {
    await canLaunch(project.url)
        ? launch(project.url)
        : throw 'Could not launch ${project.url}';
  }
}

class MakeEnquiry extends StatelessWidget {
  const MakeEnquiry({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 16.0),
      child: AppPadding(
        child: Column(
          children: [
            Row(
              children: [
                const SmallDivider(),
                const SizedBox(width: 8),
                Text(
                  'Enquiries',
                  style: GoogleFonts.abrilFatface(
                    textStyle: Theme.of(context).textTheme.headline3,
                    color: Colors.white,
                  ),
                ),
              ],
            ),
            Text(
              'Have any project in mind?',
              style: GoogleFonts.acme(
                textStyle: Theme.of(context).textTheme.headline5,
                color: Colors.white,
              ),
            ),
            const Text('Email me at hardebahyho@gmail.com'),
          ],
        ),
      ),
    );
  }
}

class Footer extends StatelessWidget {
  const Footer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color.fromARGB(255, 18, 19, 18),
      padding: const EdgeInsets.all(2.0),
      child: const DottedBg(
        child: Padding(
          padding: EdgeInsets.only(
            left: 32.0,
            right: 32.0,
            top: 64.0,
            bottom: 32.0,
          ),
          child: Center(
              child: Text('Jagunmolu Adebayo © 2021. Made with Flutter :)')),
        ),
      ),
    );
  }
}

class MyButton extends StatelessWidget {
  final Color textColor;
  final VoidCallback onTap;
  final String text;

  const MyButton({
    Key? key,
    this.textColor = Colors.white,
    required this.onTap,
    required this.text,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(16.0),
        decoration: BoxDecoration(
          border: Border.all(color: Colors.cyan, width: 2.0),
        ),
        child: Text(
          text,
          style: Theme.of(context).textTheme.bodyText1?.copyWith(
                color: textColor,
              ),
        ),
      ),
    );
  }
}

class HeroCard extends StatelessWidget {
  final IconData icon;
  final String title;
  final String content;
  const HeroCard({
    Key? key,
    required this.icon,
    required this.title,
    required this.content,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(8.0),
        child: DottedBg(
          child: Container(
            width: 250,
            height: 300,
            padding: const EdgeInsets.all(16.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Icon(
                  icon,
                  size: 48,
                  color: Colors.cyan,
                ),
                const SizedBox(height: 16),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, style: Theme.of(context).textTheme.headline6),
                    const SizedBox(height: 16),
                    const SmallDivider(),
                  ],
                ),
                const SizedBox(height: 16),
                Text(content),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class SmallDivider extends StatelessWidget {
  const SmallDivider({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 50,
      height: 4,
      decoration: BoxDecoration(
        color: Colors.cyan,
        borderRadius: BorderRadius.circular(8.0),
      ),
    );
  }
}

class VerticalDivider extends StatelessWidget {
  const VerticalDivider({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Center(
        child: Container(
          width: 2,
          height: 50,
          decoration: BoxDecoration(
            color: Colors.cyan,
            borderRadius: BorderRadius.circular(8.0),
          ),
        ),
      ),
    );
  }
}

class DottedBg extends StatelessWidget {
  final Widget child;

  const DottedBg({
    Key? key,
    required this.child,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return CustomPaint(
      painter: MyPainter(),
      child: child,
    );
  }
}

class MyPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    Paint paint = Paint()
      ..color = Colors.black
      ..style = PaintingStyle.fill
      ..isAntiAlias = true;

    canvas.drawRect(Rect.fromLTWH(0, 0, size.width, size.height), paint);

    final w = size.width / 4;
    final h = size.height / 4;

    final p = Paint()..color = const Color.fromARGB(255, 18, 19, 18);

    for (int i = 0; i < w; i++) {
      for (int j = 0; j < h; j++) {
        double x = i * 4;
        double y = j * 4;

        canvas.drawRect(Rect.fromLTWH(x + 2, y + 2, 2, 2), p);
      }
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return false;
  }
}

class AppPadding extends StatelessWidget {
  final Widget child;

  const AppPadding({
    Key? key,
    required this.child,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ConstrainedBox(
        constraints:
            BoxConstraints(maxWidth: MediaQuery.of(context).size.width * 0.8),
        child: child,
      ),
    );
  }
}
