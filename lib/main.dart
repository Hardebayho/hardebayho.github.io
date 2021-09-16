import 'package:flutter/material.dart';
import 'package:portfolio/app.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(const Project());
}

class Project extends StatelessWidget {
  const Project({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Jagunmolu Adebayo Portfolio',
      debugShowCheckedModeBanner: false,
      themeMode: ThemeMode.dark,
      darkTheme: ThemeData(
        brightness: Brightness.dark,
        canvasColor: Colors.black,
        appBarTheme: const AppBarTheme(
          backgroundColor: Colors.black,
        ),
        colorScheme: const ColorScheme.dark(),
        textTheme: GoogleFonts.latoTextTheme(ThemeData.dark().textTheme),
      ),
      home: const App(),
    );
  }
}
